import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { TransactionListServiceLayer } from './transaction-list-service-layer.service';
import { localize } from '@nativescript/localize';
import { TransactionDisplay } from '~/app/shared/interfaces/coin.interface';
import { ToastProvider } from '~/app/providers/toast.provider';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { EncryptionProvider } from '~/app/providers/encryption.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { DataService } from '~/app/services/update-data-service/update-data-service';

@Component({
  selector: 'app-transaction-list',
  moduleId: module.id,
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnChanges {
  @Input() transactionItems;
  // true if removing from portfolio completely
  @Output() removeTransactionEvent = new EventEmitter<boolean>();

  portfolioDatabase;
  transactions: TransactionDisplay[];
  selectedItem;
  dataService$;
  hasTransactions: boolean;

  placeholderText: string = localize('@@TransactionListcomponent_PlaceholderText');

  addTransactionText: string = localize('@@TransactionListcomponent_AddaTransaction');

  symbol: string;

  dialogBodyText: string = '';

  dialogOpen = false;
  dialogButtons = [
    {
      buttontext: localize('@@TransactionListcomponent_EditTransaction'),
      buttonvalue: 'Edit Transaction',
      buttonclass: 'primary',
      buttonvisibility: true
    }, {
      buttontext: localize('@@TransactionListcomponent_RemoveTransaction'),
      buttonvalue: 'Remove Transaction',
      buttonclass: 'primary',
      buttonvisibility: true
    }, {
      buttontext: localize('@@TransactionListcomponent_RemoveFromPortfolio'),
      buttonvalue: 'Remove from Portfolio',
      buttonclass: 'primary',
      buttonvisibility: false
    }, {
      buttontext: localize('@@TransactionListcomponent_Ok'),
      buttonvalue: 'Ok',
      buttonclass: 'primary',
      buttonvisibility: false
    }, {
      buttontext: localize('@@TransactionListcomponent_Cancel'),
      buttonvalue: 'Cancel',
      buttonclass: 'outline',
      buttonvisibility: true
    }
  ];

  constructor(
    private toast: ToastProvider,
    private dataStorageProvider: DataStorageProvider,
    private routerExtensions: RouterExtensions,
    private utilities: UtilitiesProvider,
    private encryption: EncryptionProvider,
    private portfolioDBService: DatabaseService,
    private dataService: DataService,
    private transactionListServiceLayer: TransactionListServiceLayer) {
    this.portfolioDatabase = this.portfolioDBService.getDataBase('portfolio');
  }

  ngOnInit() {

  }

  ngOnChanges({ transactionItems }: SimpleChanges) {
    if (transactionItems !== undefined && transactionItems.currentValue) {
      const currentCoin = JSON.parse(transactionItems.currentValue.currentCoin);
      if (currentCoin !== null) {
        const docs = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
        const updatedDBDoc = this.utilities.getDocumentbySymbol(docs, currentCoin.symbol);
        this.transactionItems = updatedDBDoc.data;
        this.dataStorageProvider['transactions'] = this.transactionItems.transactions;
        this.transactions = this.formatTransactions(this.transactionItems);
        this.hasTransactions = (this.transactions.length > 0) ? true : false;
      } else {
        this.transactions = [];
        this.hasTransactions = false;
        this.removeTransactionEvent.emit(true);
      }
    }
  }

  dialogTransactionButtonEvent(event): void {
    this.togglePortfolio(event);
  }

  togglePortfolio(btnEvent): void {
    switch (btnEvent.buttonvalue) {
      case 'Edit Transaction':
        this.dataStorageProvider.transactions['newTransaction'] = false;
        this.routerExtensions.navigate(['/portfolioform']);
        break;
      case 'Remove Transaction':
        this.toggleDialog();
        this.updateDialogButtons(false);
        this.dialogRemoveButtons(true);
        this.dialogBodyText = localize('@@TransactionListcomponent_DialogHeaderText');
        this.toggleDialog();
        break;
      case 'Ok':
        this.toggleDialog();
        this.removeTransaction(true);
        break;
      case 'Cancel':
        this.toggleDialog();
        this.dialogBodyText = '';
        this.dialogRemoveButtons(false);
        break;
      default:
        this.toggleDialog();
        this.dialogBodyText = '';
        break;
    }
  }

  dialogRemoveButtons(isBeingRemoved): void {
    if (isBeingRemoved) {
      this.updateDialogButtons(false);
      this.dialogButtons = this.dialogButtons.map((x) => {
        if (x.buttonvalue === 'Ok') {
          x.buttonvisibility = true;
        } else {
          if (x.buttonvalue !== 'Cancel') {
            x.buttonvisibility = false;
          }
        }
        return x;
      });
    } else {
      this.updateDialogButtons(true);
    }
  }

  toggleDialog() {
    this.dialogOpen = (this.dialogOpen) ? false : true;
  }

  updateDialogButtons(inThisPortfolio) {
    this.dialogButtons = this.transactionListServiceLayer.mapButtons(this.dialogButtons, inThisPortfolio);
  }

  addTransaction(args, type) {
    this.dataStorageProvider['transactions'] = { newTransaction: true };
    this.routerExtensions.navigate(['/portfolioform']);
  }

  formatTransactions(items): TransactionDisplay[] {
    if (items && items.transactions.length > 0) {
      const transactionArr = [];
      const transactions = items.transactions;
      for (let i = 0; i < transactions.length; i++) {
        const symbol = (items.currentCoin && items.currentCoin.symbol) ? items.currentCoin.symbol : items.symbol;
        const transactionStringObj = this.transactionListServiceLayer.createTransactionString(transactions[i], symbol);
        transactionArr.push(transactionStringObj);
      }

      return this.transactionListServiceLayer.sortTransactionsByDate(transactionArr, 'DESC');
    } else {
      return [];
    }
  }

  onLoaded(args) { }

  onItemLoading(args) { }

  setSelectedItem(item) {
    this.selectedItem = item;
  }

  onItemTap(item: TransactionDisplay) {
    this.dataStorageProvider.transactions['selectedTransaction'] = item;
    this.toggleDialog();
  }

  private removeTransaction(res) {
    if (res) {
      const docs = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
      const dbDoc = this.utilities.getDocumentbySymbol(docs, this.transactionItems.symbol);
      const dbTransactions = dbDoc.data.transactions;
      const selectedTransaction = this.dataStorageProvider.transactions.selectedTransaction;
      const transactionIndex = this.getTransactionIndex(selectedTransaction.transaction, dbTransactions);

      dbTransactions.splice(transactionIndex, 1);
      if (dbTransactions.length < 1) {
        this.hasTransactions = (this.transactions.length === 1) ? false : true;
        this.removeFromPortfolio(docs, dbDoc.data.symbol);
        this.removeTransactionEvent.emit(true);
      } else {
        dbDoc.data.transactions = this.transactionListServiceLayer.sortTransactionsByDate(dbTransactions, 'DESC');
        const encryptedData = this.encryptData(dbDoc.data);
        const formData = {
          data: encryptedData,
          type: 'portfolio'
        };
        this.updateDocument(dbDoc._id, formData);
        const docs = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
        const updatedDBDoc = this.utilities.getDocumentbySymbol(docs, this.transactionItems.symbol);
        this.transactionItems = updatedDBDoc.data;
        this.dataStorageProvider['transactions'] = this.transactionItems.transactions;
        this.transactions = this.formatTransactions(this.transactionItems);
        this.toast.makeToast(localize('@@TransactionListcomponent_TransactionRemoved'));
        this.dialogBodyText = '';
        this.updateDialogButtons(true);
        this.removeTransactionEvent.emit(false);
      }

    }
  }

  doesTransactionExists(transaction, dbTransactions): boolean {
    for (let i = 0; i < dbTransactions.length; i++) {
      if (dbTransactions[i].transactionid === transaction.transactionid) {
        return true;
      }
    }
    return false;
  }

  getTransactionIndex(transaction, dbTransactions) {
    for (let i = 0; i < dbTransactions.length; i++) {
      if (dbTransactions[i].transactionid === transaction.transactionid) {
        return i;
      }
    }
  }

  private removeFromPortfolio(docs, symbol) {
    const id = this.utilities.getDBDocumentIdBySymbol(docs, symbol);
    this.portfolioDatabase.deleteDocument(id);
    this.toast.makeToast(`${symbol} ${localize('@@TransactionListcomponent_RemovedFromPortfolio')}`);
    this.updateList('portfolio');
  }

  updateList(dbType) {
    this.dataService$ = this.dataService.updatingData(dbType);
  }

  encryptData(coinData) {
    return this.encryption.encrypt(JSON.stringify(coinData));
  }

  updateDocument(id, formData) {
    this.portfolioDatabase.updateDocument(id, formData);
  }

}
