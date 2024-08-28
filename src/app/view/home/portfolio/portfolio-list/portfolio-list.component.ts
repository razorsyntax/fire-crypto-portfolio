import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, Color } from '@nativescript/core';

import { Couchbase } from 'nativescript-couchbase';
import { PullToRefreshStyle, RadListView } from 'nativescript-ui-listview';

// import { CacheProvider } from '~/providers/cache.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { CoinDataMapperProvider } from '~/app/providers/coindata-mapper.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { DataService } from '~/app/services/update-data-service/update-data-service';

import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { PortfolioItem, Ticker, ExchangeRatesAPI } from '~/app/shared/interfaces/getservice.interface';

import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-list',
  moduleId: module.id,
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() priceIntervals;
  @Input() userprefs;

  emptyPortfolio: boolean = true;
  portfolioItem$: Observable<PortfolioItem[]>;
  portfolioLoading: boolean = true;
  coinData$;
  dataService$;
  private database: Couchbase;

  constructor(
    // private cache: CacheProvider,
    private dataService: DataService,
    private utilities: UtilitiesProvider,
    private portfolioDataBase: DatabaseService,
    private routerExtensions: RouterExtensions,
    private coinMapper: CoinDataMapperProvider
  ) {
    this.database = this.portfolioDataBase.getDataBase('portfolio');
  }

  ngOnInit() { }

  onLoaded(event: Event | unknown) {
    const style = new PullToRefreshStyle();
    style.indicatorColor = (isAndroid) ? new Color('black') : new Color('white');
    style.indicatorBackgroundColor = (isAndroid) ? new Color('white') : new Color('transparent');
    (event['object'] as RadListView).pullToRefreshStyle = style;
  }

  ngOnChanges({ priceIntervals, userprefs }: SimpleChanges) {
    if (priceIntervals.currentValue) {
      this.loadPortfolioList(priceIntervals);
    }

    if (userprefs && userprefs.currentValue) {

    }
  }

  async loadPortfolioList(priceIntervals) {
    const tickers: Ticker[] = priceIntervals.currentValue[1];
    const exchangeRates: ExchangeRatesAPI = priceIntervals.currentValue[2];
    const userPrefs: UserPrefs = priceIntervals.currentValue[3];
    this.portfolioItem$ = this.setPortfolioListItems(tickers, exchangeRates, userPrefs)
      .pipe(
        map(res => (res && res.length > 0) ? res : [])
      );
  }

  setPortfolioListItems(tickers: Ticker[], exchangeRates: ExchangeRatesAPI, userPrefs: UserPrefs): Observable<PortfolioItem[]> {
    const coinList = this.utilities.executeDBQuery(this.database, 'portfolio');
    if (coinList.length > 0) {
      this.spinner(false);
      this.emptyPortfolio = false;
      const symbolList: string[] = this.utilities.createSymbolArr(coinList);
      if (symbolList && symbolList.length) {
        const sorted = this.sortBy(this.loadSymbolPath(tickers, coinList, userPrefs, exchangeRates), 'ascend');
        return of(sorted);
      }
    } else {
      this.spinner(false);
      this.emptyPortfolio = true;
      return of([]);
    }
  }

  private loadSymbolPath(tickers, coinList, userPrefs, exchangeRates) {
    const coinArr = [];
    const defaultCurrency = userPrefs.defaultcurrency;
    // const cachedRates = this.cache.getCache('exchangeRates') || exchangeRates;
    const rate: number = 1;// cachedRates.rates[userPrefs.defaultcurrency];
    for (let i = 0; i < coinList.length; i++) {
      coinArr.push(
        this.coinMapper.portfolioListMapper(tickers, coinList[i], defaultCurrency, rate)
      );
    }
    return coinArr.reverse();
  }

  refreshPortfolio(): void {
    this.dataService$ = this.dataService.updatingData('UpdatePrices');
  }

  openForm(): void {
    this.routerExtensions.navigate(['/search'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  spinner(isEnabled: boolean): void {
    this.portfolioLoading = isEnabled;
  }

  pullToRefresh(event: Event): void {
    const pullToRefresh = event['object'];

    setTimeout(() => {
      this.refreshPortfolio();
      pullToRefresh.notifyPullToRefreshFinished();
    }, 1000);
  }

  sortBy(itemArr, sortType: string) {
    let items;
    switch (sortType) {
      case 'ascend':
        items = itemArr.sort((a, b) => {
          const aPrice = parseFloat(a.pricetotal);
          const bPrice = parseFloat(b.pricetotal);
          return (aPrice < bPrice) ? 1 : (aPrice > bPrice) ? -1 : 0;
        });
        return items;
      case 'descend':
        items = itemArr.sort((a, b) => {
          const aPrice = parseFloat(a.pricetotal);
          const bPrice = parseFloat(b.pricetotal);
          return (aPrice > bPrice) ? 1 : (aPrice < bPrice) ? -1 : 0;
        });
        return items;
      default:
        break;
    }
  }

  ngOnDestroy() {
    if (this.dataService$) {
      this.dataService$.unsubscribe();
    }
  }

}
