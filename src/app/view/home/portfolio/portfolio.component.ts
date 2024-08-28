import { Component, OnInit, Output, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { SegmentedBarItem, SegmentedBar } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio',
  styleUrls: ['./portfolio.component.scss'],
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit {
  @Input() pricesIntervals;
  @Input() userprefs;

  @Output() listItem: object[];
  @Output() watchlistItem: object[];

  items: SegmentedBarItem[];
  segmentedBars = [];

  tabBorders = {
    topborder: '#c4c4c4',
    bottomborder: '#c4c4c4'
  };
  tabs = [{
    charCode: String.fromCharCode(0xf51e),
    charClass: 'fontawesome-solid',
    tabId: 'portfoliolist'
  }, {
    charCode: String.fromCharCode(0xf06e),
    charClass: 'fontawesome',
    tabId: 'watchlist'
  }];

  tabType: 'portfolio' | 'watchlist' = 'portfolio';

  selectedIndex: number = 0;

  showSpinner: boolean = false;
  showChart: boolean = false;

  pageLoading: boolean = true;

  constructor(private ngZone: NgZone) {}

  toggleSpinner(spinnerstate: boolean): void {
    this.showSpinner = spinnerstate;
  }

  hasData(showChart: Event | unknown): void {
    this.showChart = showChart as boolean;
  }

  ngOnInit() {
    this.items = [];
    for (let i = 1; i < 3; i++) {
      const segmentedBarItem = new SegmentedBarItem() as SegmentedBarItem;
      this.segmentedBars.push(segmentedBarItem);
      segmentedBarItem.style.visibility = 'collapse';
      this.items.push(segmentedBarItem);
    }
    this.selectedIndex = 0;
    this.pageLoading = false;
    this.tabChange(0);
  }

  tabChange(tab: number) {
    if (tab === 0) {
      this.ngZone.run(() => { this.tabType = 'portfolio'; });
    } else {
      this.ngZone.run(() => { this.tabType = 'watchlist'; });
    }
  }

  onSelectedIndexChange(args) {
    const segmentedBar = args.object as SegmentedBar;
    this.selectedIndex = segmentedBar.selectedIndex;
    segmentedBar.visibility = 'collapse';
    this.tabChange(this.selectedIndex);
  }

  onBarLoaded(args) {}

  loadWatchlistItems() {
    return '';
  }

}
