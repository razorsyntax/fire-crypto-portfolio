import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ObservableArray, SearchBar, Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { localize } from '@nativescript/localize';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { CacheProvider } from '~/app/providers/cache.provider';
import { ConnectivityService } from '~/app/services/connectivity.service';

class DataItem {
  constructor(
    public currency: string,
    public id: string,
    public symbol: string,
    public name: string,
    public crypto_icon: string) { }
}

@Component({
  selector: 'app-search-filter',
  moduleId: module.id,
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchFilterComponent implements OnInit {
  searchPhrase: string;
  toggleSpinner: boolean;

  defaultHintText: string = localize('@@SearchFilterComponent_DefaultText');

  private arrayItems: DataItem[] = [];
  myItems$: ObservableArray<DataItem> = new ObservableArray<DataItem>();

  constructor(
    page: Page,
    private routerExtensions: RouterExtensions,
    private dataStorageProvider: DataStorageProvider,
    private navigationHistory: NavHistoryProvider,
    private utilities: UtilitiesProvider,
    private cache: CacheProvider,
    private connectivity: ConnectivityService) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    if (this.connectivity.hasConnectivity()) {
      this.getCoinList();
    } else {
      this.connectivity.noInternetNav();
    }
  }

  compare(a, b) {
    if (a.currency.toLowerCase() < b.currency.toLowerCase()) {
      return -1;
    }
    if (a.currency.toLowerCase() > b.currency.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  onSubmit(args) {
    const searchBar = args.object as SearchBar;
    const searchValue = searchBar.text.toLowerCase();

    this.myItems$ = new ObservableArray<DataItem>();

    if (searchValue !== '') {
      this.arrayItems.sort(this.compare);
      for (let i = 0; i < this.arrayItems.length; i++) {
        if (this.arrayItems[i].currency.toLowerCase().indexOf(searchValue) !== -1 || this.arrayItems[i].symbol.toLowerCase().indexOf(searchValue) !== -1) {
          this.myItems$.push(this.arrayItems[i]);
        }
      }
      this.toggleSpinner = false;
    }
  }

  onClear(args) {
    const searchBar = args.object as SearchBar;
    searchBar.text = '';
    searchBar.hint = localize('@@SearchFilterComponent_DefaultText');

    this.myItems$ = new ObservableArray<DataItem>();
    this.arrayItems.forEach((item) => {
      this.myItems$.push(item);
    });
  }

  /**
   * Ensures keyboard doesn't pop up when page loads for android
   * @param event
   */
  onSearchBarLoaded(event) {
    if (event.object.android) {
      event.object.android.clearFocus();
    }
  }

  createCoinList(obj) {
    const coinList = obj;
    for (let i = 0; i < coinList.length; i++) {
      try {
        const name = (coinList[i].name !== '') ? coinList[i].name : coinList[i].symbol;
        const crypto_icon = this.utilities.setCryptoIconPath(coinList[i].symbol);
        this.arrayItems.push(
          new DataItem(
            name,
            coinList[i].id,
            coinList[i].symbol,
            name,
            crypto_icon
          )
        );
      } catch (e) {
        console.log(e);
      }
    }
    this.arrayItems.sort(this.compare);
    this.arrayItems.forEach((item) => {
      if (item.name !== '') {
        this.myItems$.push(item);
      }
    });

    this.toggleSpinner = false;
  }

  getCoinList() {
    this.toggleSpinner = true;
    const tickers = this.cache.getCache('tickers'); // 'dashboard'
    this.createCoinList(tickers);
  }

  closeSearchPage() {
    this.routerExtensions.navigate(['/home'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  loadCoinDetailsPage(coinItem) {
    this.dataStorageProvider.coinAPIDetails = {
      coin: coinItem
    };
    this.navigationHistory.previousNavigation = 'search';
    this.routerExtensions.navigate(['/coindetails'], {
      clearHistory: true,
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

}
