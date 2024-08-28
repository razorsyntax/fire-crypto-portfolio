import { Component, OnInit, Output, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { Couchbase } from 'nativescript-couchbase';

import { DatabaseService } from '~/app/services/database-service/database.service';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { ConnectivityService } from '~/app/services/connectivity.service';

import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { CoinDataMapperProvider } from '~/app/providers/coindata-mapper.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { ToastProvider } from '~/app/providers/toast.provider';
import { CacheProvider } from '~/app/providers/cache.provider';

import { Tabs } from '~/app/shared/interfaces/obj.interface';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { CoinDetails, CoinForm, CoinUIData } from '~/app/shared/interfaces/coin.interface';

import { Subscription } from 'rxjs';
import { localize } from '@nativescript/localize';

interface HoldingsData {
  coin?: string;
  symbol?: string;
  transactions?: CoinForm[];
}

interface TransitionOptions {
  name?: string;
  duration?: number;
  curve?: string;
}

@Component({
  selector: 'app-coin-details',
  moduleId: module.id,
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CoinDetailsComponent implements OnInit, OnDestroy {
  @Output() cryptoSymbolAndRate: any = {
    symbol: '',
    currencyrate: null
  };

  coinId: string = '';

  portfolioChanged: boolean = false;

  dialogBodyText: string = '';

  dialogOpen = false;
  dialogButtons = [
    {
      buttontext: localize('@@CoinDetailsComponent_AddToPortfolio'),
      buttonvalue: 'Add to Portfolio',
      buttonclass: 'primary',
      buttonvisibility: true
    }, {
      buttontext: localize('@@CoinDetailsComponent_AddTransaction'),
      buttonvalue: 'Add a Transaction',
      buttonclass: 'primary',
      buttonvisibility: false
    }, {
      buttontext: localize('@@CoinDetailsComponent_RemoveFromPortfolio'),
      buttonvalue: 'Remove from Portfolio',
      buttonclass: 'primary',
      buttonvisibility: false
    }, {
      buttontext: localize('@@CoinDetailsComponent_Ok'),
      buttonvalue: 'Ok',
      buttonclass: 'primary',
      buttonvisibility: false
    }, {
      buttontext: localize('@@CoinDetailsComponent_Cancel'),
      buttonvalue: 'Cancel',
      buttonclass: 'outline',
      buttonvisibility: true
    }
  ];

  coinPage: Page;

  topBoxData: CoinDetails = {
    name: '',
    symbol: '',
    availablesupply: '',
    marketcap: '',
    twentyfourhrvol: '',
    price: 0,
    iconpath: '',
    id: '',
    defaultcurrency: '',
    holdings: 0
  };

  // UPDATE
  portfolioBox: any;

  inWatchlist: boolean = false;
  inPortfolio: boolean = false;
  inThisPortfolio: boolean = false;
  showTransactionBox: boolean;

  inWatchlistClass: string;
  inPortfolioClass: string;
  interval;
  dashboardCache;
  pricesCache;
  tickersCache;

  symbol: string;
  price: string;
  oneDayColor: string;
  sevenDayColor: string;
  twenty4DayColor: string;
  tabSelected: string = 'selected';
  tabUnselected: string = 'unselected';
  updateData: string;
  isTransactionSelected: string;
  isChartSelected: string;
  coinDataService$: Subscription;
  coinData: CoinUIData;
  transactionItems;
  dataService$;

  currentDBCoin: HoldingsData;

  tabBorders = {
    topborder: '#c4c4c4',
    bottomborder: '#c4c4c4'
  };
  tabs: Tabs[] = [{
    charCode: String.fromCharCode(0xf201),
    charClass: 'fontawesome-solid',
    tabId: 'financialchart'
  }, {
    charCode: String.fromCharCode(0xf0ec),
    charClass: 'fontawesome',
    tabId: 'transactionlist'
  }];

  private watchListDatabase: Couchbase;
  private portfolioDatabase: Couchbase;
  private userprefsDatabase: Couchbase;
  ratesCache: any;
  symbol_id: any;
  exchangeRatesCache: any;

  constructor(
    public page: Page,
    private cache: CacheProvider,
    private toast: ToastProvider,
    private dataService: DataService,
    private dbService: DatabaseService,
    private utilities: UtilitiesProvider,
    private connectivity: ConnectivityService,
    private coinMapper: CoinDataMapperProvider,
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider,
    private dataStorageProvider: DataStorageProvider
  ) {
    this.coinPage = page;
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    const dbs = this.dbService.getMultipleDBs(['watchlist', 'portfolio', 'userprefs']);
    this.watchListDatabase = dbs[0];
    this.portfolioDatabase = dbs[1];
    this.userprefsDatabase = dbs[2];

    this.isTransactionSelected = this.tabUnselected;
    this.isChartSelected = this.tabSelected;
  }

  ngOnInit() {
    if (this.connectivity.hasConnectivity()) {
      this.loadPage();
    } else {
      this.connectivity.noInternetNav();
    }
  }

  loadPage(): void {
    this.coinData = this.dataStorageProvider.coinAPIDetails.coin;
    this.symbol = this.coinData.symbol;
    this.symbol_id = this.coinData.id;
    this.coinId = this.symbol_id;
    const watchListDocs = this.utilities.executeDBQuery(this.watchListDatabase, 'watchlist');
    const portfolioDocs = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
    const userprefsDoc = this.utilities.executeDBQuery(this.userprefsDatabase, 'userprefs');

    this.inWatchlist = this.utilities.isSymbolInDBList(watchListDocs, this.coinData.symbol);
    this.inPortfolio = this.utilities.isSymbolInDBList(portfolioDocs, this.coinData.symbol);
    // used to update dialog buttons
    this.inThisPortfolio = this.inPortfolio;
    this.updateDialogButtons(this.inThisPortfolio);
    this.currentDBCoin = (this.inPortfolio) ? portfolioDocs.filter(x => x.data.symbol === this.coinData.symbol)[0].data : null;
    this.getCoinDataCall(this.coinData, this.currentDBCoin, userprefsDoc[0]);
  }

  updateDialogButtons(inThisPortfolio) {
    if (inThisPortfolio) {
      this.dialogButtons = this.dialogButtons.map(x => {
        switch (x.buttonvalue) {
          case 'Add to Portfolio':
            x.buttonvisibility = false;
            break;
          case 'Add a Transaction':
            x.buttonvisibility = true;
            break;
          case 'Remove from Portfolio':
            x.buttonvisibility = true;
            break;
          case 'Ok':
            x.buttonvisibility = false;
            break;
        }
        return x;
      });
    } else {
      this.dialogButtons = this.dialogButtons.map(x => {
        switch (x.buttonvalue) {
          case 'Add to Portfolio':
            x.buttonvisibility = true;
            break;
          case 'Add a Transaction':
            x.buttonvisibility = false;
            break;
          case 'Remove from Portfolio':
            x.buttonvisibility = false;
            break;
          case 'Ok':
            x.buttonvisibility = false;
            break;
        }
        return x;
      });
    }
  }

  close(): void {
    this.dataStorageProvider.coinAPIDetails = { coin: '' };
    const prevPage: string = this.navigationHistory.previousNavigation;
    switch (prevPage) {
      case 'search':
        this.navigateRoute('/home', 'slideBottom', 300, 'easeOut');
        break;
      case 'transactions':
        this.navigateRoute('/home', 'slideBottom', 300, 'easeOut');
        break;
      case 'marketcap':
        if (this.portfolioChanged) {
          this.navigateRoute('/home', 'slideBottom', 300, 'easeOut');
        } else {
          this.routerExtensions.backToPreviousPage();
        }
        break;
      case 'portfolio':
        this.navigateRoute('/home', 'slideBottom', 300, 'easeOut');
        break;
      case 'portfolio-update':
        this.navigateRoute('/home', 'slideBottom', 300, 'easeOut');
        break;
      default:
        this.routerExtensions.backToPreviousPage();
        break;
    }
  }

  navigateRoute(route: string, name: string, duration: number, curve: string) {
    this.routerExtensions.navigate([route], {
      transition: this.transitionOptions(name, duration, curve)
    });
  }

  transitionOptions(name: string, duration: number, curve: string): TransitionOptions {
    return {
      name: name,
      duration: duration,
      curve: curve
    };
  }

  clearNavigationProviderHistory(): void {
    this.navigationHistory.previousNavigation = '';
  }

  toggleWatchlist(event): void {
    const symbol: string = event.symbol;
    const name: string = event.name;
    const symbol_id: string = event.id;
    const docs = this.utilities.executeDBQuery(this.watchListDatabase, 'watchlist');
    const context = this.coinData;
    let toastMessage = '';
    if (!this.utilities.isSymbolInDBList(docs, context.symbol)) {
      const id = this.watchListDatabase.createDocument({
        name: name,
        symbol: symbol,
        id: symbol_id,
        type: 'watchlist'
      });
      this.inWatchlist = (id !== null && id !== undefined) ? true : false;
      const message = (id !== null && id !== undefined) ?
        `${name} ${localize('@@CoinDetailsComponent_AddedToWatchlist')}`
        :
        localize('@@CoinDetailsComponent_ErrorSavingToWatchlist');
      toastMessage = message;
    } else {
      const id = this.utilities.getDBDocumentIdBySymbol(docs, context.symbol);
      const deleted = this.watchListDatabase.deleteDocument(id);
      if (deleted) {
        setTimeout(() => {
          this.inWatchlist = false;
        }, 0);
      }
      toastMessage = `${name} ${localize('@@CoinDetailsComponent_RemovedFromWatchlist')}`;
    }
    this.toast.makeToast(toastMessage);
    this.updateList('watchlist');
    this.portfolioChanged = true;
  }

  dialogButtonEvent(event): void {
    this.togglePortfolio(event);
  }

  portfolioIconPressed(event): void {
    this.dialogOpen = true;
  }

  togglePortfolio(btnEvent): void {
    const docs = this.utilities.executeDBQuery(this.portfolioDatabase, 'portfolio');
    const context = this.coinData;
    switch (btnEvent.buttonvalue) {
      case 'Add to Portfolio':
        this.navigateRoute('/portfolioform', 'slideLeft', 300, 'easeOut');
        break;
      case 'Add a Transaction':
        this.storeDocument(docs, context, true);
        this.navigateRoute('/portfolioform', 'slideLeft', 300, 'easeOut');
        break;
      case 'Remove from Portfolio':
        this.closeDialog();
        this.dialogRemoveButtons(true);
        this.dialogBodyText = localize('@@CoinDetailsComponent_DialogBodyText');
        this.showDialog();
        break;
      case 'Ok':
        this.inPortfolioClass = 'not-in-portfolio';
        this.removeFromPortfolio(docs, context.symbol);
        this.portfolioChanged = true;
        this.closeDialog();
        this.dialogRemoveButtons(false);
        break;
      case 'Cancel':
        this.closeDialog();
        this.dialogBodyText = '';
        this.dialogRemoveButtons(false);
        break;
      default:
        this.closeDialog();
        this.dialogBodyText = '';
        break;
    }
  }

  navigateToTransactions(args) {
    this.navigationHistory.previousNavigation = 'coindetails';
    this.routerExtensions.navigate(['/transactions'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      },
      queryParams: this.transactionItems
    });
  }

  dialogRemoveButtons(isBeingRemoved): void {
    if (isBeingRemoved) {
      this.dialogButtons = this.dialogButtons.map(x => {
        if (x.buttontext === 'Ok') {
          x.buttonvisibility = true;
        } else {
          if (x.buttontext !== 'Cancel') {
            x.buttonvisibility = false;
          }
        }
        return x;
      });
    } else {
      this.updateDialogButtons(this.inThisPortfolio);
    }
  }

  showDialog(): void {
    this.dialogOpen = true;
  }

  closeDialog(): void {
    this.dialogOpen = false;
  }

  tabSelection(tab): void {
    this.showTransactionBox = (tab === 0) ? false : true;
  }

  getCoinDataCall(coin: CoinUIData, portfolioCoin, userprefs: UserPrefs) {
    this.tickersCache = this.cache.getCache('tickers');
    this.exchangeRatesCache = this.cache.getCache('exchangeRates');
    const rate: number = 1; // this.exchangeRatesCache.rates[userprefs.defaultcurrency];
    this.portfolioBox = this.coinMapper.coinDetailsPortfolioBox(this.tickersCache, coin, portfolioCoin, userprefs, rate);
    this.topBoxData = this.coinMapper.coinDetailsCoinDataBox(this.tickersCache, coin, userprefs, rate);
    this.cryptoSymbolAndRate = new Object({ symbol: this.symbol_id, currencyrate: 1 });

    this.transactionItems = {
      currentCoin: JSON.stringify(portfolioCoin),
      transactions: (portfolioCoin) ? JSON.stringify(portfolioCoin.transactions) : []
    };
  }

  private removeFromPortfolio(docs, symbol): void {
    const id = this.utilities.getDBDocumentIdBySymbol(docs, symbol);
    this.portfolioDatabase.deleteDocument(id);
    this.toast.makeToast(`${symbol} ${localize('@@CoinDetailsComponent_RemovedFromPortfolio')}`);
    this.updateList('portfolio');
    this.clearPortfolioData();
  }

  private storeDocument(docs, context, isNewTransaction: boolean): void {
    const symbol = context.symbol;
    const id = this.utilities.getDBDocumentIdBySymbol(docs, symbol);
    const doc = this.utilities.getDocumentById(docs, id);

    if (doc) {
      this.dataStorageProvider.dbStorage = JSON.stringify(doc);
      this.dataStorageProvider['transactions'] = { newTransaction: isNewTransaction };
    } else {
      this.toast.makeToast('You should\'t see this');
    }
  }

  updateList(dbType): void {
    this.dataService$ = this.dataService.updatingData(dbType);
  }

  mapDataToUI(coinData): void {
    this.symbol = coinData.symbol;
    this.symbol_id = coinData.id;
    // this.price = this.utilities.priceFormat(coinData.price);
    // this.oneDayColor = this.utilities.priceColor(coinData.percent_change_1h);
    // this.sevenDayColor = this.utilities.priceColor(coinData.percent_change_7d);
    // this.twenty4DayColor = this.utilities.priceColor(coinData.percent_change_24h);
  }

  transactionRemoved(event): void {
    if (event) {
      this.clearPortfolioData();
    } else {
      this.loadPage();
    }
  }

  private clearPortfolioData(): void {
    this.inThisPortfolio = false;
    this.inPortfolio = false;
    this.transactionItems = { currentCoin: null, transactions: [] };
  }

  ngOnDestroy() {
    if (this.dataService$) {
      this.dataService$.unsubscribe();
    }

    if (this.coinDataService$) {
      this.coinDataService$.unsubscribe();
    }
  }

}
