import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Page, SegmentedBarItem, SegmentedBar } from '@nativescript/core';
import { GetService } from './../../services/Get.service';
import { DatabaseService } from './../../services/database-service/database.service';
import { Subscription } from 'rxjs';
import { Couchbase } from 'nativescript-couchbase';
import { ConnectivityService } from '~/app/services/connectivity.service';
import { RouterExtensions } from '@nativescript/angular';
// DO NOT DELETE - DO NOT UNCOMMENT
// import { CoinIdStitcherUtility } from '~/utilities/coin-id-sticher.utility';

export interface CoinList {
  Response: string;
  Data: object;
}

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [GetService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public tabIds: Array<{ id: string }> = [{ id: 'portfolio' }, { id: 'discovery' }, { id: 'market' }];

  public tabBorders = {
    topborder: '#c4c4c4'
  };

  public tabs = [{
    charCode: String.fromCharCode(0xe901),
    charClass: 'fire-font',
    tabId: 'firehome'
  }, {
    charCode: String.fromCharCode(0xf0eb),
    charClass: 'fontawesome',
    tabId: 'coindiscovery'
  }, {
    charCode: String.fromCharCode(0xe900),
    charClass: 'fire-font',
    tabId: 'marketcaplist'
  }];

  public items: SegmentedBarItem[];
  public segmentedBars: SegmentedBarItem[] = [];

  public selectedIndex: number = 0;
  public showAppPortfolio: boolean = true;
  public showCoinDiscovery: boolean = false;
  public showMarketCap: boolean = false;
  public coinData$: Subscription;
  public database: Couchbase;
  public userPrefs$: Couchbase;

  constructor(
    public page: Page,
    private ngZone: NgZone,
    private coinListDB: DatabaseService,
    private connectivity: ConnectivityService,
    private routerExtensions: RouterExtensions
    // DO NOT UNCOMMENT - Used for marrying CoinGecko coin list with Coin Paprika coin list
    // private CoinIdStitcherUtility: CoinIdStitcherUtility
  ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    if (!this.connectivity.hasConnectivity()) {
      this.connectivity.noInternetNav();
      return;
    } else {
      this.loadConstructor();
    }
  }

  ngOnInit() {
    // Coin Utility TEST
    // this.CoinIdStitcherUtility.runCall();
  }

  public navigateToWelcome(): void {
    this.routerExtensions.navigate(['/welcome'], {
      transition: {
        name: 'slideTop',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  public loadConstructor(): void {
    this.items = [];
    for (let i = 1; i < 3; i++) {
      const segmentedBarItem: SegmentedBarItem = new SegmentedBarItem() as SegmentedBarItem;
      this.segmentedBars.push(segmentedBarItem);
      segmentedBarItem.style.visibility = 'collapse';
      this.items.push(segmentedBarItem);
    }
    this.selectedIndex = 0;

    this.tabChange(0);

    this.items = [];
    for (let i = 1; i < 3; i++) {
      const segmentedBarItem: SegmentedBarItem = new SegmentedBarItem() as SegmentedBarItem;
      segmentedBarItem.title = String.fromCharCode(this.loadIcons(i));
      segmentedBarItem.className = this.loadClassNames(i);
      this.items.push(segmentedBarItem);
    }
    this.selectedIndex = 0;

    this.database = this.coinListDB.getDataBase('coinlist');
  }

  public tabChange(tab: number): void {

    switch (tab) {
      case 0:
        this.setVisibility(true, false, false);
        break;
      case 1:
        this.setVisibility(false, true, false);
        break;
      case 2:
        this.setVisibility(false, false, true);
        break;
      default:
        break;
    }

  }

  public onSelectedIndexChange(args): void {
    const segmentedBar: SegmentedBar = args.object as SegmentedBar;
    this.selectedIndex = segmentedBar.selectedIndex;
    segmentedBar.visibility = 'collapse';
    this.tabChange(this.selectedIndex);
  }

  public setVisibility(portfolioTab: boolean, coinDiscoveryTab: boolean, marketCapTab: boolean): void {
    this.ngZone.run(() => {
      this.showAppPortfolio = portfolioTab;
      this.showCoinDiscovery = coinDiscoveryTab;
      this.showMarketCap = marketCapTab;
    });

  }

  private loadIcons(index: number): number {
    const icons: number[] = [0xe900, 0xe901];
    return icons[index - 1];
  }

  private loadClassNames(index): string {
    const classNames: string[] = ['selected', 'unselected'];
    return classNames[index - 1];
  }

  ngOnDestroy() {
    if (this.coinData$) {
      this.coinData$.unsubscribe();
    }
  }
}
