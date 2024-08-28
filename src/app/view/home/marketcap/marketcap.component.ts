import { Component, OnInit, Output, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { GetService } from '~/app/services/Get.service';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { RouterExtensions } from '@nativescript/angular';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { ConnectivityService } from '~/app/services/connectivity.service';
import { MarketCapServiceLayer } from './marketcap-service-layer.service';
import { DataService } from '~/app/services/update-data-service/update-data-service';
// import { map } from 'rxjs/operators';
import { ExchangeRates, Global, Ticker } from '~/app/shared/interfaces/getservice.interface';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { PullToRefreshStyle, RadListView } from 'nativescript-ui-listview';
import { Color, isAndroid } from '@nativescript/core';
import { Observable, of } from 'rxjs';
import { CryptoListItem } from '~/app/shared/interfaces/coin.interface';

@Component({
  selector: 'app-marketcap',
  moduleId: module.id,
  templateUrl: './marketcap.component.html',
  styleUrls: ['./marketcap.component.scss']
})
export class MarketcapComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public pricesIntervals;

  @Output() public listItems = [];
  public globalMarketData: any = {
    marketcap: 0,
    twentyfourhrvol: 0,
    dominance: 0,
    defaultCurrency: 'USD'
  };

  public isMarketCapLoading: boolean = true;

  public infiniteList;

  public dataService$;
  public marketCapService$;

  public cryptoList: Observable<CryptoListItem[]>;
  public page: number = 0;
  public coinData$;
  public defaultUserCurrency: string;
  public rate: ExchangeRates[];

  constructor(
    private marketCapRequest: GetService,
    private coinDetails: DataStorageProvider,
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider,
    private dataService: DataService,
    private connectivity: ConnectivityService,
    private marketcapServiceLayer: MarketCapServiceLayer
  ) { }

  ngOnInit() {
    if (this.connectivity.hasConnectivity()) {
      this.isMarketCapLoading = true;
    }
  }

  public onLoaded(event: Event): void {
    const style = new PullToRefreshStyle();
    style.indicatorColor = (isAndroid) ? new Color('black') : new Color('white');
    style.indicatorBackgroundColor = (isAndroid) ? new Color('white') : new Color('transparent');
    (event['object'] as RadListView).pullToRefreshStyle = style;
  }

  ngOnChanges({ pricesIntervals }: SimpleChanges) {
    if (pricesIntervals && pricesIntervals.currentValue /*&& !pricesIntervals.firstChange*/) {
      const marketCapStuff = pricesIntervals.currentValue[0];
      const tickers = pricesIntervals.currentValue[1];
      const exchangeRates: ExchangeRates = pricesIntervals.currentValue[2];
      const userPrefs: UserPrefs = pricesIntervals.currentValue[3];
      this.globalMarketData = {
        marketcap: marketCapStuff.market_cap_usd,
        twentyfourhrvol: marketCapStuff.volume_24h_usd,
        dominance: marketCapStuff.bitcoin_dominance_percentage,
        defaultCurrency: userPrefs.defaultcurrency
      };

      this.loadMarketcapData(tickers, userPrefs, exchangeRates);
    }
  }

  public loadMarketcapData(tickers: Ticker[], userPrefs: UserPrefs, exchangeRates: ExchangeRates): void {
    const defaultcurrency: string = this.getDefaultCurrency(userPrefs);
    const rate: number = 1; //exchangeRates.rates[defaultcurrency] as number;
    this.cryptoList = of(this.marketcapServiceLayer.marketCap(tickers, defaultcurrency, rate));
    setTimeout(() => {
      this.isMarketCapLoading = false;
    }, 10);

  }

  public getDefaultCurrency(userPrefs: UserPrefs | UserPrefs[]): string {
    if (Array.isArray(userPrefs)) {
      return userPrefs[0].defaultcurrency;
    } else {
      return userPrefs.defaultcurrency;
    }
  }

  // Unsed until necessary
  // infiniteScroll(): void {
  //   this.page = this.page + 100;
  //   this.cryptoList = this.cryptoList.concat(this.infiniteList.slice(this.page, this.page + 100));
  // }

  // use this only for pull to refresh
  public async getGlobaData(): Promise<any> {
    this.marketCapService$ = await this.marketCapRequest.getGlobal().then(global => {
      const volumes = this.setGlobalData(global[0], this.defaultUserCurrency);
      this.globalMarketData = volumes
    });
      // .pipe(map(global => ))
      // .subscribe(volumes => this.globalMarketData = volumes);
  }

  public setGlobalData(global: Global, defaultcurrency: string) {
    return {
      marketcap: global.market_cap_usd,
      twentyfourhrvol: global.volume_24h_usd,
      dominance: global.bitcoin_dominance_percentage,
      defaultCurrency: defaultcurrency
    };
  }

  public refreshList(args: Event): void {
    this.page = 0;
    const pullToRefresh = args['object'];

    setTimeout(() => {
      this.dataService$ = this.dataService.updatingData('UpdatePrices');
      pullToRefresh.notifyPullToRefreshFinished();
    }, 1000);
  }

  public onBusyChanged(evnt) { }

  public loadCoinDetailsPage(event): void {
    this.coinDetails.coinAPIDetails = {
      coin: event
    };
    this.navigationHistory.previousNavigation = 'marketcap';
    this.routerExtensions.navigate(['/coindetails'], {
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  ngOnDestroy() {
    if (this.marketCapService$) {
      this.marketCapService$.unsubscribe();
    }
  }
}
