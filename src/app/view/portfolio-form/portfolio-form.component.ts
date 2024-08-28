import { Component, OnInit, OnDestroy, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { localize } from '@nativescript/localize';
import { Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PortfolioFieldsServiceLayer } from './portfolio-fields/portfolio-fields-service-layer.service';

import * as _ from 'lodash';
import { CacheProvider } from '~/app/providers/cache.provider';
import { ToastProvider } from '~/app/providers/toast.provider';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { EncryptionProvider } from '~/app/providers/encryption.provider';
import { MapToFormService } from '~/app/services/map-to-form-service/map-to-form.service';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { LoadingIndicatorProvider } from '~/app/providers/loading-indicator.provider';
import { DateTimeUtilitiesProvider } from '~/app/providers/datetime-utilities.provider';
import { Exchanges } from '~/app/shared/interfaces/getservice.interface';
import { Portfolio, PortfolioData, PortfolioDoc, Transaction } from '~/app/shared/interfaces/database.interface';
import { CoinData, CoinForm, CoinFormTypes, CoinHeaderDetails } from '~/app/shared/interfaces/coin.interface';

@Component({
  selector: 'app-portfolio-form',
  moduleId: module.id,
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit, OnDestroy {
  @ViewChild('myfilter', { static: false }) myfilter: ElementRef;
  public listPickerItems: any[] = [];
  public hintText: string = localize('@@PortfolioFormComponent_ListPickerHint');
  public enableSearch: boolean;
  public readonly locationObtained: string[] = ['Airdrop', 'On Exchange', 'Mined', 'Transfer', 'Dividend'];
  public readonly locationObtainedSell: string[] = ['Sold', 'On Exchange', 'Swapped', 'Transfer', 'Released'];
  readonly transferLocation: string[] = ['My Wallet', 'Other Wallet', 'Exchange'];
  public obtained: string = 'obtained';
  public exchange: string;
  public exchange_id: string;
  public tradingpair: string;
  public tradingpair_id: string;
  public transferfrom: string = 'transfer from';
  public transferto: string = 'transfer to';
  public fieldSelected: string = '';
  public exchangesList: Exchanges[];

  public selectedTab: number = 0;

  public fieldUpdate = new EventEmitter<string>();
  public transferWasSelected: boolean = false;
  public isValid: boolean = false;
  public validationMessage: string = '';
  public portfolioDocuments: Portfolio;
  public getexchangeData$: Subscription;
  public storageParams: any;
  public currentTransactionId: string;

  public selectedItemindex: number = 0;
  public listItems: any[] = [];
  public formCache: any;
  public headerObj: CoinHeaderDetails = {};
  public setSelectedTab: number;
  public showlocationForm: boolean = true;
  public showExchangeForm: boolean = true;

  public dateAdded: string;
  public timeAdded: string;

  public model: CoinForm = {};

  public symbol: string;

  private portfolioDatabase: any;
  public symbol_id: string;
  public selectedExchange: { title: string; id: string; };
  public exchangeText: string = 'exchange';
  public tradingpairText: string = 'trading pair';

  constructor(
    public page: Page,
    private cache: CacheProvider,
    private toast: ToastProvider,
    private updateData: DataService,
    private utilities: UtilitiesProvider,
    private encryption: EncryptionProvider,
    private mapToFormService: MapToFormService,
    private routerExtensions: RouterExtensions,
    private portfolioDBService: DatabaseService,
    private navigationHistory: NavHistoryProvider,
    private dataStorageProvider: DataStorageProvider,
    private loadingIndicator: LoadingIndicatorProvider,
    private dateTimeUtilities: DateTimeUtilitiesProvider,
    private portfolioServiceLayer: PortfolioFieldsServiceLayer
  ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    this.portfolioDatabase = this.portfolioDBService.getDataBase('portfolio');
    this.formCache = this.cache;
    this.storageParams = this.dataStorageProvider.dbStorage;

    this.loadExchange();
  }

  ngOnInit() {
    this.preloadForms();
  }

  public cancelFilterableList(args): void {
    console.log('canceled');
  }

  public itemTapped(args): void {
    switch (this.fieldSelected) {
      case 'obtained':
        this.obtained = args.selectedItem;
        this.showExchangeTradingPairFields(args.selectedItem);
        break;
      case 'exchange':
        this.exchange = args.selectedItem.title;
        this.exchange_id = args.selectedItem.id;
        this.exchangeText = args.selectedItem.title;
        this.selectedExchange = args.selectedItem;
        break;
      case 'tradingpair':
        this.tradingpair = args.selectedItem.title;
        this.tradingpair_id = args.selectedItem.id;
        this.tradingpairText = args.selectedItem.title;
        break;
      case 'transferredTo':
        this.transferto = args.selectedItem;
        break;
      case 'transferredFrom':
        this.transferfrom = args.selectedItem;
        break;
    }
  }

  public loadExchange(): void {
    this.portfolioServiceLayer.loadExchange().pipe(
      map(res => {
        this.exchangesList = [];
        this.exchangesList = res['content'].toJSON();
        return this.portfolioServiceLayer.formatExchanges(res);
      }),
      tap(res => this.cache.setCache(res, 'exchangelist')));
  }

  public showExchangeTradingPairFields(selectedItem: string): void {
    const showExchangeTradingPair = (selectedItem === 'On Exchange' || selectedItem === 'Airdrop') ? true : false;
    this.portfolioServiceLayer.exchangeField.next(showExchangeTradingPair);
  }

  public showPicker(): void {
    this.myfilter.nativeElement.show();
  }

  public advancedOption(option: CoinFormTypes): void {
    this.fieldSelected = option;
    this.listPickerItems = [];
    switch (option) {
      case 'obtained':
        this.listPickerItems = (this.selectedTab === 0) ? this.locationObtained : this.locationObtainedSell;
        this.showPicker();
        break;
      case 'exchange':
        const exchangeList = this.cache.getCache('exchangelist');
        if (exchangeList !== null) {
          this.listPickerItems = exchangeList;
          this.showPicker();
        } else {
          this.loadingIndicator.showLoader();
          this.portfolioServiceLayer.loadExchange().pipe(
            map(res => {
              this.exchangesList = [];
              this.exchangesList = res['content'].toJSON();
              return this.portfolioServiceLayer.formatExchanges(res);
            }),
            tap(res => this.cache.setCache(res, 'exchangelist'))
          ).subscribe(formattedExchanges => { this.listPickerItems = formattedExchanges; this.loadingIndicator.hideLoader(); this.showPicker(); });

        }
        break;
      case 'tradingpair':
        if (this.selectedExchange !== undefined && this.selectedExchange.title !== 'exchange') {
          this.loadingIndicator.showLoader();
          const exchange4TradingPair = this.cache.getCache('exchangelist');
          const exchangeItem = exchange4TradingPair.filter(exchange => (exchange.title === this.selectedExchange.title) || (exchange.id === this.selectedExchange.id));
          this.portfolioServiceLayer.loadTradingPairs(exchangeItem[0].id).subscribe(tradingPairs => {
            const mappedItems = tradingPairs['content'].toJSON().map(item => {
              // which is the base, which is the quote?
              if (item.base_currency_id === this.model.symbol_id || item.quote_currency_id === this.model.symbol_id) {
                return {
                  id: item.base_currency_id,
                  title: item.pair
                };
              }
            });
            this.listPickerItems = _.compact(mappedItems);
            if (this.listPickerItems.length !== 0) {
              this.loadingIndicator.hideLoader();
              this.showPicker();
            } else {
              this.loadingIndicator.hideLoader();
              this.toast.makeToast(localize('@@PortfolioFormComponent_SelectAnExchangeToast'));
            }
          });
        } else {
          this.toast.makeToast(localize('@@PortfolioFormComponent_SelectAnExchangeToast'));
        }
        break;
      case 'transferredFrom':
        this.listPickerItems = this.transferLocation;
        this.showPicker();
        break;
      case 'transferredTo':
        this.listPickerItems = this.transferLocation;
        this.showPicker();
        break;
    }
  }

  public tabSelected(tab: 0 | 1 | 2) {
    switch (tab) {
      case 0:
        this.selectedTab = 0;
        break;
      case 1:
        this.selectedTab = 1;
        break;
      case 2:
        this.selectedTab = 2;
        break;
    }
  }

  public preloadForms(): void {
    const coinInfo: CoinData = this.dataStorageProvider.coinAPIDetails.coin;
    this.symbol = coinInfo.symbol;
    this.symbol_id = coinInfo.id;
    this.portfolioDocuments = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
    const inPortfolio: boolean = this.utilities.isSymbolInDBList(this.portfolioDocuments, this.symbol);
    let holdingsAmt: number = 0;
    if (inPortfolio) {
      const transactionType: 'newTransaction' | 'editTransaction' = (this.dataStorageProvider.transactions.newTransaction) ? 'newTransaction' : 'editTransaction';
      const portfolioDocs: Portfolio = this.utilities.getDocumentbySymbol(this.portfolioDocuments, this.symbol);
      holdingsAmt = this.utilities.calculateTotalAmount(portfolioDocs.data.transactions);
      this.mapToForm(coinInfo, transactionType);
    } else {
      if (this.dataStorageProvider.coinAPIDetails) {
        this.mapToForm(coinInfo, 'newTransaction');
        this.dataStorageProvider['transactions'] = { newTransaction: true };
      } else {
        console.log('This shouldn\'t have happened.');
        this.model.coin = 'select a coin';
        this.model.buyselltransfer = 'transaction type';
      }
    }
    this.headerObj = this.setHeaderObj(coinInfo.name, this.symbol, holdingsAmt.toString());
  }

  public mapToForm(coin: CoinData, type: 'newTransaction' | 'editTransaction'): void {
    switch (type) {
      case 'newTransaction':
        this.model = this.mapToFormService.mapToNewPortfolioForm(coin);
        // save to form data cache for portfolio field component
        this.cache.clearCacheByType('formData');
        this.cache.setCache(this.model, 'formData');
        this.updateData.updatingData('portfolio-form-new');
        break;
      case 'editTransaction':
        const dbData = this.utilities.getDocumentbySymbol(this.portfolioDocuments, this.dataStorageProvider.coinAPIDetails.coin.symbol);
        const transaction = this.dataStorageProvider.transactions.selectedTransaction.transaction;
        this.model = this.mapToFormService.mapToPortfolioForm(transaction, dbData.data.coin, dbData.data.symbol, dbData.data.symbol_id);
        this.obtained = transaction.obtained || 'obtained';
        this.exchange = transaction.exchange || 'exchange';
        this.exchangeText = transaction.exchange || 'exchange';
        this.exchange_id = transaction.exchange_id || '';
        this.selectedExchange = { title: this.exchangeText, id: this.exchange_id };
        this.tradingpair = transaction.tradingpair || 'trading pair';
        this.tradingpairText = transaction.tradingpair || 'trading pair';
        this.tradingpair_id = transaction.tradingpair_id || '';
        this.transferfrom = transaction.transferredFrom || 'transfer from';
        this.transferto = transaction.transferredTo || 'transfer to';
        this.showExchangeTradingPairFields(this.obtained);
        // save to form data cache for portfolio field component
        this.cache.setCache(this.model, 'formData');
        this.updateData.updatingData('portfolio-form-edit');
        break;
    }
  }

  private setHeaderObj(coinName: string, symbol: string, coinPrice: string): CoinHeaderDetails {
    return {
      coinName: coinName,
      coinSymbol: symbol,
      coinPrice: this.utilities.trimDecimals(coinPrice)
    };
  }

  public navigateBack(): void {
    this.cache.clearCacheByType('formData');
    this.navigationHistory.previousNavigation = 'portfolio-update';
    this.routerExtensions.navigate(['/coindetails'], {
      clearHistory: true,
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  public clearDataProvider(): void {
    this.dataStorageProvider.dbStorage = '';
    this.dataStorageProvider.transactions.newTransaction = true;
  }

  public submit(): void {
    const event = this.formCache.getCache('formData');
    const transactionData = this.packageNewTransaction(event);
    transactionData['exchange_id'] = this.exchange_id;
    transactionData['tradingpair_id'] = this.tradingpair_id;
    const valid = this.validateFields(transactionData);
    let message: string = '';
    if (valid) {
      const portfolioDocs: PortfolioDoc = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
      const inPortfolio: boolean = this.utilities.isNameInDBList(portfolioDocs, event.coin);
      const inputData: PortfolioData = {
        coin: event.coin,
        symbol: event.symbol,
        symbol_id: this.symbol_id,
        transactions: this.packageForPortfolioDB(inPortfolio, portfolioDocs, transactionData, event.symbol)
      };

      const formData: PortfolioDoc = {
        data: this.encryptData(inputData),
        type: 'portfolio'
      };

      if (inPortfolio) {
        const docId: string = this.utilities.getDBDocumentIdByName(portfolioDocs, event.coin);
        this.updateDocument(docId, formData);
        message = localize('@@PortfolioFormComponent_SuccessfullyUpdated_Message');
      } else {
        message = this.addNewDocument(formData, event.coin);
      }

      this.clearDataProvider();
      this.toast.makeToast(message);
      this.navigateBack();
    }
  }

  public addNewDocument(formData, coin: string): string {
    const newDocId: string = this.createDocument(formData);
    if (newDocId) {
      this.updateData.updatingData('portfolio');
      return coin + ' added to Portfolio!';
    } else {
      return 'Error saving...';
    }
  }

  public packageNewTransaction(formData: CoinForm): Transaction {
    let transactionAmount: number = formData.amount;
    let exchangeForm = formData.exchange;
    let tradingPairForm = formData.tradingpair;
    let transferTo = '';
    let transferFrom = '';
    const items = ['Mined', 'Transfer', 'Dividend'];
    if (items.includes(formData.obtained)) {
      formData['exchange'] = '';
      formData['exchange_id'] = '';
      formData['tradingpair'] = '';
      formData['tradingpair_id'] = '';
    }

    const showAdvancedForm: boolean = (formData.exchange === '' || formData.exchange === 'exchange');

    const advancedFormFunc = (form: boolean) => {
      if (form) {
        exchangeForm = '';
        tradingPairForm = '';
      }
    };
    switch (formData.buyselltransfer) {
      case 'sell':
        transactionAmount = transactionAmount * -1;
        advancedFormFunc(showAdvancedForm);
        break;
      case 'buy':
        advancedFormFunc(showAdvancedForm);
        break;
      case 'transfer':
        advancedFormFunc(true);
        transferTo = (formData.transferredTo === 'transfer to') ? '' : formData.transferredTo;
        transferFrom = (formData.transferredFrom === 'transfer from') ? '' : formData.transferredFrom;
        break;
      default:
        console.log('Transaction Type selection failed.');
        break;
    }

    return {
      dateadded: formData.dateadded,
      timeadded: formData.timeadded,
      datetime: this.dateTimeUtilities.dateTimeFormat(formData.dateadded, formData.timeadded),
      transactiontype: formData.buyselltransfer,
      exchange: exchangeForm,
      exchange_id: this.exchange_id || '',
      tradingpair: tradingPairForm,
      tradingpair_id: this.tradingpair_id || '',
      amount: transactionAmount,
      transferredTo: transferTo,
      transferredFrom: transferFrom,
      obtained: formData.obtained,
      transactionid: formData.transactionid
    };
  }

  public packageForPortfolioDB(inPortfolio: boolean, portfolioDocs, transactionData: Transaction, symbol: string) {
    if (inPortfolio) {
      const portfolioDoc = this.utilities.getDocumentbySymbol(portfolioDocs, symbol);
      let dbTransactions = portfolioDoc.data.transactions;
      const transactionExists = this.doesTransactionExists(transactionData, dbTransactions);
      if (transactionExists) {
        const transactionIndex: number = this.getTransactionIndex(transactionData, dbTransactions);
        dbTransactions[transactionIndex] = transactionData;
      } else {
        dbTransactions.push(transactionData);
      }

      dbTransactions = this.sortTransactionsByDate(dbTransactions);
      return dbTransactions;
    } else {
      return [transactionData];
    }
  }

  public doesTransactionExists(transaction: Transaction, dbTransactions: Transaction[]): boolean {
    for (let i = 0; i < dbTransactions.length; i++) {
      if (dbTransactions[i].transactionid === transaction.transactionid) {
        return true;
      }
    }
    return false;
  }

  public getTransactionIndex(transaction: Transaction, dbTransactions: Transaction[]): number {
    for (let i = 0; i < dbTransactions.length; i++) {
      if (dbTransactions[i].transactionid === transaction.transactionid) {
        return i;
      }
    }
  }

  public encryptData(coinData: PortfolioData): string {
    return this.encryption.encrypt(JSON.stringify(coinData));
  }

  public createDocument(obj: Portfolio): string {
    return this.portfolioDatabase.createDocument(obj);
  }

  public updateDocument(id: string, formData: PortfolioDoc): void {
    this.portfolioDatabase.updateDocument(id, formData);
    this.updateData.updatingData('portfolio');
  }

  public sortTransactionsByDate(transactionArray: Transaction[]): Transaction[] {
    const compare = (a, b) => {
      if (a.datetime < b.datetime) {
        return -1;
      }
      if (a.datetime > b.datetime) {
        return 1;
      }
      return 0;
    };

    return transactionArray.sort(compare);
  }

  private validateFields(data): boolean {
    data.timeadded = (data.timeadded !== undefined) ? data.timeadded : '';
    if (this.model.coin === '') {
      this.validationMessage = localize('@@PortfolioFormComponent_CoinValidation_Message');
      this.isValid = false;
      return false;
    }

    if (data.amount === '' || isNaN(data.amount)) {
      this.validationMessage = localize('@@PortfolioFormComponent_AmountValidation_Message');
      this.isValid = false;
      return false;
    }

    if (data.amount < 0) {
      if (data.transactiontype !== 'sell') {
        this.validationMessage = localize('@@PortfolioFormComponent_NegativeAmountValidation_Message');
        this.isValid = false;
        return false;
      }
    }

    if (data.timeadded === '') {
      this.validationMessage = localize('@@PortfolioFormComponent_TimeAddedValidation_Message');
      this.isValid = false;
      return false;
    }

    if (data.exchange === '' && (data.obtained === 'exchange' || data.obtained === 'airdrop')) {
      this.validationMessage = localize('@@PortfolioFormComponent_ExchangeValidation_Message');
      this.isValid = false;
      return false;
    }

    if (data.transactiontype === 'transfer') {
      if (data.transferredFrom === '') {
        this.validationMessage = localize('@@PortfolioFormComponent_TransferredFromValidation_Message');
        this.isValid = false;
        return false;
      }

      if (data.transferredTo === '') {
        this.validationMessage = localize('@@PortfolioFormComponent_TransferredToValidation_Message');
        return false;
      }
    }

    this.isValid = true;
    this.validationMessage = '';
    return true;
  }

  public fieldUpdater(type: string): void {
    this.fieldUpdate.emit(type);
  }

  ngOnDestroy() {
    if (this.getexchangeData$) {
      this.getexchangeData$.unsubscribe();
    }
  }

}
