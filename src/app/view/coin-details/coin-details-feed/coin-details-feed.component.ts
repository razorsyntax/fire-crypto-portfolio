import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
// import { GetService } from '~/services/Get.service';
import { CoinIdsProvider } from '~/app/providers/coin.ids.provider';
// import { of } from 'rxjs';

// import * as moment from 'moment';
import { RouterExtensions } from '@nativescript/angular';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';

// interface FeedList {
//   icon?: string;
//   title?: string;
//   url?: string;
//   date?: string;
//   showimage?: boolean;
//   image?: string;
// }

@Component({
  selector: 'app-coin-details-feed',
  templateUrl: './coin-details-feed.component.html',
  styleUrls: ['./coin-details-feed.component.scss']
})
export class CoinDetailsFeedComponent implements OnInit, OnChanges {
  @Input() coin: string;

  readonly dateFormat: string = 'MM/DD/YYYY HH:MM';

  feed$;

  title: string = '';
  feedIcon: string = '';
  urlPath: string = '';

  hasImg: boolean = false;
  isCoinFeedVisible: boolean = false;

  constructor(
    //private getService: GetService,
    private coinSwitcher: CoinIdsProvider,
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider
  ) { }

  ngOnInit() { }

  ngOnChanges({ coin }: SimpleChanges) {
    if (coin && coin.currentValue !== null) {
      if (coin.currentValue !== '') {
        const idObj: object = this.coinSwitcher.coin_ids[coin.currentValue];

        if (typeof idObj === 'object' && idObj.hasOwnProperty('slug')) {
          // UNCOMMENT WHEN YOU HAVE AND CAN REPLACE WITH A FREE NEWS API
          // const slug = idObj['slug'];
          // if (slug) {
          //   this.getService.getCryptFeedByCoin(slug)
          //     .then(res => {
          //       if(res) {
          //         if (res.content.toJSON().length > 0) {
          //           this.feed$ = of(this.packageForFeed(res));
          //           this.isCoinFeedVisible = true;
          //         }
          //       }
          //     }, (error) => {
          //       // don't load news box
          //       // 429 - too many requests
          //     });
          // }
        }
      }
    }
  }

  // private packageForFeed(feed) {
  //   const feedArr = [];
  //   for (let i = 0; i < feed.length; i++) {
  //     const element = feed[i];
  //     feedArr.push(this.feedType(element));
  //   }
  //   return feedArr;
  // }

  // private feedType(feed): FeedList {
  //   switch (feed.type) {
  //     case 'article':
  //       return this.mapNewsFeed(feed, String.fromCharCode(0xf1ea));
  //     case 'reddit':
  //       return this.mapRedditFeed(feed, String.fromCharCode(0xf281), 'reddit');
  //     case 'tweet':
  //       return this.mapTweetFeed(feed, String.fromCharCode(0xf099), 'tweet');
  //   }
  // }

  // private mapRedditFeed(feedItem, icon, socialType: string) {
  //   const feedObj = {
  //     icon: icon,
  //     title: feedItem[socialType].title,
  //     path: feedItem[socialType].url,
  //     date: moment(feedItem[socialType].publishedAt).format(this.dateFormat),
  //     showimage: false,
  //     col: '50,*',
  //     color: '#FF5700'
  //   };
  //   return feedObj;
  // }

  // private mapTweetFeed(feedItem, icon, socialType: string) {
  //   const feedObj = {
  //     icon: icon,
  //     title: feedItem[socialType].text,
  //     path: feedItem[socialType].url,
  //     date: moment(feedItem[socialType].publishedAt).format(this.dateFormat),
  //     showimage: false,
  //     col: '50,*',
  //     color: '#6CADDE'
  //   };
  //   return feedObj;
  // }

  // private mapNewsFeed(feedItem, icon) {
  //   const feedObj = {
  //     icon: icon,
  //     title: feedItem.article.title,
  //     path: feedItem.article.url,
  //     date: moment(feedItem.article.publishedAt).format(this.dateFormat),
  //     showimage: (feedItem.article.originalImageUrl !== '') ? true : false,
  //     image: (feedItem.article.originalImageUrl !== '') ? feedItem.article.originalImageUrl : '',
  //     col: '*,*',
  //     source: feedItem.article.source.name
  //   };
  //   return feedObj;
  // }

  goToUrl(url: string): void {
    this.navigationHistory.previousNavigation = 'coindetails';
    this.routerExtensions.navigate(['/webview'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      },
      queryParams: { path: url }
    });
  }

}
