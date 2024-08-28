import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpResponse, Page } from '@nativescript/core';
import { map, tap } from 'rxjs/operators';

import { defer, forkJoin, from } from 'rxjs';
import { RouterExtensions } from '@nativescript/angular';
import { GetService } from '~/app/services/Get.service';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {
  tagDescription: string = '';
  tagName: string = '';

  loading: boolean = false;
  readonly white = '#ffffff';
  readonly blue = '#3aa1e9';
  tagColor: string = this.white;
  showTagPanel: boolean = false;

  tags: {text: string, value: string}[];

  coin$;

  constructor(
    public page: Page,
    private getService: GetService,
    private route: ActivatedRoute,
    private coinDetails: DataStorageProvider,
    private navigationHistory: NavHistoryProvider,
    private routerExtensions: RouterExtensions,
    private utilities: UtilitiesProvider
  ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tag = params['tag'];
      if (tag !== undefined && tag !== 'NAV_COINDISC') {
        this.loadTagsById(tag);
      } else {
        this.callForTags();
        if (tag === 'NAV_COINDISC') {
          this.tagColor = this.blue;
          this.showTagPanel = true;
        }
      }
    });
  }

  loadTagsById(tagId: string) {
    this.loading = true;

    const getCoinsTdIdCall$ = defer(() => from(this.getService.getCoinsByTagId(tagId)));
    const getTickersCall$ = defer(() => from(this.getService.getTickers()));

    const calls = [
      getCoinsTdIdCall$.pipe(
          map(res => this.setTitleAndDescription(res.content.toJSON()))
        ),
        getTickersCall$
    ];

    forkJoin(calls).pipe(
      tap(([tag]) => this.setTitleAndDescription(tag)),
      map(([tag, tickers]) => this.cpToSymbol(tag, tickers.content.toJSON()))
    ).subscribe(res => {
      this.coin$ = res;
      this.loading = false;
    });

    this.callForTags();
  }

  callForTags() {
    this.getService.getTags().then((res: HttpResponse) => {
      const tagArr = res.content.toJSON();
      const tagStr = [];
      for (let i = 0; i < tagArr.length; i++) {
        const element = tagArr[i];
        tagStr.push({ text: element.name, value: element.id });
      }
      this.tags = tagStr.sort((a, b) => (a.text > b.text) ? 1 : -1);
    });
  }

  setTitleAndDescription(res) {
    this.tagDescription = res.description;
    this.tagName = res.name;
    return res;
  }

  cpToSymbol(res, tickers) {
    const coinList = res['coins'];
    const arr = [];
    for (let i = 0; i < coinList.length; i++) {
      const coin = coinList[i];
      console.log('tag-search: tickers.filter');
      const ticker = tickers.filter(coinItem => coin === coinItem.id);
      console.log('-----------------');
      if (ticker.length !== 0) {
        arr.push({ path: this.utilities.setCryptoIconPath(ticker[0].symbol), symbol: ticker[0].symbol, id: ticker[0].id });
      }
    }
    return arr;
  }

  showTags(args?) {
    this.tagColor = (this.tagColor === '#ffffff') ? '#3aa1e9' : '#ffffff';
    this.showTagPanel = !this.showTagPanel ? true : false;
  }

  tagSelected(item) {
    this.loading = true;
    this.showTags();
    this.loadTagsById(item);
    // close the chips panel
    // make the tag icon white
  }

  backToHome() {
    this.navigationHistory.previousNavigation = 'tagsearch';
    this.routerExtensions.navigate(['/home'], {
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  loadCoinDetailsPage(event) {
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
}
