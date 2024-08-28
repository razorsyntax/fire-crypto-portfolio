import {
  Component,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';
import { PullToRefreshStyle, RadListView } from 'nativescript-ui-listview';
import { RouterExtensions } from '@nativescript/angular';
import { Color } from '@nativescript/core';

import { DatabaseService } from '~/app/services/database-service/database.service';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { MapToFormService } from '~/app/services/map-to-form-service/map-to-form.service';

import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { ConnectivityService } from '~/app/services/connectivity.service';
import { ToastProvider } from '~/app/providers/toast.provider';
import { Ticker, ExchangeRatesAPI } from '~/app/shared/interfaces/getservice.interface';

import { isAndroid } from '@nativescript/core';

import { of } from 'rxjs';
import { localize } from '@nativescript/localize';

@Component({
  selector: 'app-watchlist-list',
  moduleId: module.id,
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.scss']
})

export class WatchlistListComponent implements OnDestroy, OnChanges, OnInit {
  @Input() priceIntervals;
  watchlistItem$;
  updateData: string;
  dataService$;
  coinData$;
  watchlistLoading = true;

  watchlistListComponent_DefaultText = localize('@@WatchlistListComponent_DefaultText');

  private database: any;

  constructor(
    private toast: ToastProvider,
    private routerExtensions: RouterExtensions,
    private watchlistDataBase: DatabaseService,
    private dataStorageProvider: DataStorageProvider,
    private navigationHistory: NavHistoryProvider,
    private dataService: DataService,
    private mapToForm: MapToFormService,
    private connectivity: ConnectivityService
  ) {
    this.database = this.watchlistDataBase.getDataBase('watchlist');
  }

  ngOnInit() { }

  onLoaded(event: Event) {
    const style = new PullToRefreshStyle();
    style.indicatorColor = (isAndroid) ? new Color('black') : new Color('white');
    style.indicatorBackgroundColor = (isAndroid) ? new Color('white') : new Color('transparent');
    (event['object'] as RadListView).pullToRefreshStyle = style; // <-- fix typing
  }

  ngOnChanges({ priceIntervals }: SimpleChanges) {
    if (priceIntervals.currentValue) {
      let docs = [];
      try {
        docs = this.database.executeQuery('watchlist');
      } catch (e) {
        this.toast.makeToast(e);
      }
      if (this.connectivity.hasConnectivity()) {
        this.loadWatchlist(docs, priceIntervals.currentValue).subscribe((watchList) => {
          this.watchlistItem$ = watchList;
          this.watchlistLoading = false;
        });
      }
    }
  }

  loadCoinDetailsPage(event) {
    this.dataStorageProvider.coinAPIDetails = {
      coin: event.view.bindingContext
    };
    this.navigationHistory.previousNavigation = 'portfolio';
    this.routerExtensions.navigate(['/coindetails'], {
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  loadSearchPage(event) {
    this.routerExtensions.navigate(['/search']);
  }

  loadWatchlist(coinList, priceNintervals) {
    const tickers = priceNintervals[1];
    const exchangeRates = priceNintervals[2];
    const userprefs = priceNintervals[3];
    const idList = coinList.map((x) => x.id);
    return this.createWatchlist(tickers, exchangeRates, userprefs.defaultcurrency, idList);
  }

  private createWatchlist(tickers: Ticker[], exchangeRates: ExchangeRatesAPI, defaultcurrency: string, idList: string[]) {
    const watchListArr = [];
    let watchlistItem;
    const rate: number = 1;// exchangeRates.data[defaultcurrency];
    for (let i = 0; i < idList.length; i++) {
      const ticker = tickers.filter((tickerItem) => tickerItem.id === idList[i]);
      watchlistItem = this.mapToForm.mapToWatchlist(ticker[0], defaultcurrency, rate);
      watchListArr.push(
        watchlistItem
      );
    }

    return of(watchListArr);
  }

  pullToRefresh(args: Event) {
    const pullToRefresh = args['object']; // <-- fix typing

    setTimeout(() => {
      this.dataService$ = this.dataService.updatingData('UpdatePrices');
      pullToRefresh.notifyPullToRefreshFinished();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.dataService$) {
      this.dataService$.unsubscribe();
    }
  }

}
