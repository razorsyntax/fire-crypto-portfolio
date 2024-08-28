import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GetService } from '~/app/services/Get.service';
import { map, tap } from 'rxjs/operators';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';

import * as _ from 'lodash';
import { defer, from, Observable, of } from 'rxjs';
import { Tags, Ticker } from '~/app/shared/interfaces/getservice.interface';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { RouterExtensions } from '@nativescript/angular';
import { HttpResponse } from '@nativescript/core';

interface TransitionOptions {
  name?: string;
  duration?: number;
  curve?: string;
}

@Component({
  selector: 'app-coin-discovery',
  templateUrl: './coin-discovery.component.html',
  styleUrls: ['./coin-discovery.component.scss']
})
export class CoinDiscoveryComponent implements OnInit, OnChanges {

  @Input() public pricesIntervals;

  public tags$;
  public tags: Tags[] = [];
  public isloading: boolean = false;

  public userprefsDB$;
  public userprefs$;

  public tickers;

  constructor(
    private getService: GetService,
    private utilities: UtilitiesProvider,
    private portfolioDBService: DatabaseService,
    private navigationHistory: NavHistoryProvider,
    private routerExtensions: RouterExtensions
  ) {
    this.userprefsDB$ = this.portfolioDBService.getDataBase('userprefs');
  }

  ngOnInit() { }

  ngOnChanges({ pricesIntervals }: SimpleChanges) {
    if (pricesIntervals.currentValue && pricesIntervals.currentValue !== null) {
      this.tickers = pricesIntervals.currentValue[1];
      this.loadDiscovery(this.tickers);
    }
  }

  public loadDiscovery(tickers) {
    this.isloading = true;
    if (this.tags.length === 0) {

      const getTagsCall$: Observable<HttpResponse> = defer(() => from(this.getService.getTags()));

      this.tags$ = getTagsCall$.pipe(
        map(res => {
          this.tags = [...res.content.toJSON()];
          return res.content.toJSON();
        }),
        map(res => this.cpToSymbol(res, tickers)),
        map(res => this.sortTags(res)),
        tap(() => { this.isloading = false; })
      );
    } else {
      const sym = this.cpToSymbol(this.tags, tickers);
      const sortedTags = this.sortTags(sym);
      this.tags$ = of(sortedTags);
      this.isloading = false;
    }
  }

  public cpToSymbol(tagList: Tags[], tickers): Tags[] {
    const tagsList: Tags[] = [...tagList];
    const mapped = tagsList.map((item: Tags) => {
      const tagItem: Tags = { ...item };
      const coinList: string[] = (tagItem.hasOwnProperty('coins')) ? tagItem['coins'] : [];
      const arr: Array<{ path: string; symbol: string; id: string; }> = [];
      for (let i = 0; i < coinList.length; i++) {
        const coin: string = coinList[i];
        const ticker: Ticker[] = tickers?.filter(coinItem => coin === coinItem.id);
        if (ticker.length !== 0) {
          arr.push({ path: this.utilities.setCryptoIconPath(ticker[0].symbol), symbol: ticker[0].symbol, id: ticker[0].id });
        }
      }
      tagItem['customtags'] = arr;
      return tagItem;
    });
    return [...mapped];
  }

  public sortTags(res) {
    let immutableRes = [...res];
    this.userprefs$ = this.utilities.executeDBQuery(this.userprefsDB$, 'userprefs');
    if (this.userprefs$[0].hasOwnProperty('pinnedtags')) {
      const tags = this.userprefs$[0].pinnedtags;
      const pinnedArr = [];
      for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        // get tag for new array
        const resTag = immutableRes.filter(item => item.id === tag);

        // remove it from old value
        immutableRes = immutableRes.filter(item => item.id !== tag);
        pinnedArr.push(resTag[0]);
      }
      immutableRes = _.flatten([pinnedArr, ...immutableRes]);
    }

    return [...immutableRes];
  }

  public searchTags() {
    this.navigationHistory.previousNavigation = 'coindiscovery';
    // navigate to tags list page
    this.navigateRoute('/tagsearch', 'slideBottom', 300, 'easeOut', 'NAV_COINDISC');
  }

  public navigateRoute(route: string, name: string, duration: number, curve: string, tag: string) {
    this.routerExtensions.navigate([route], {
      transition: this.transitionOptions(name, duration, curve),
      queryParams: {
        tag: tag
      }
    });
  }

  public transitionOptions(name: string, duration: number, curve: string): TransitionOptions {
    return {
      name: name,
      duration: duration,
      curve: curve
    };
  }

  public reloadDiscovery(args) {
    this.loadDiscovery(this.tickers);
  }

  public pullToRefresh() {
    this.tags = [];
  }

  // private setTags(tags) {

  // }
}
