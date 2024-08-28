import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { DataStorageProvider } from '~/app/providers/data-storage.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';
import { RouterExtensions } from '@nativescript/angular';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';

interface TransitionOptions {
  name?: string;
  duration?: number;
  curve?: string;
}

@Component({
  selector: 'app-coin-discovery-list-item',
  templateUrl: './coin-discovery-list-item.component.html',
  styleUrls: ['./coin-discovery-list-item.component.scss']
})
export class CoinDiscoveryListItemComponent implements OnInit, OnChanges {
  @ViewChild('radList', { static: true }) radList: RadListViewComponent;

  @Output() public tagChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public coinList: string[];
  @Input() public tagName;
  public readonly white = '#ffffff';
  public readonly blue = '#3aa1e9';
  public pinColor: string = this.white;

  public pinned: boolean = false;

  public tagId: string;

  public listName: string = '';
  public listCoins: Array<{ path: string, symbol: string }> = [];

  public userprefsDB$;
  public userprefs$;

  constructor(
    private coinDetails: DataStorageProvider,
    private navigationHistory: NavHistoryProvider,
    private routerExtensions: RouterExtensions,
    private utilities: UtilitiesProvider,
    private portfolioDBService: DatabaseService
  ) {
    this.userprefsDB$ = this.portfolioDBService.getDataBase('userprefs');
    this.userprefs$ = this.utilities.executeDBQuery(this.userprefsDB$, 'userprefs');
  }

  ngOnInit() {
  }

  ngOnChanges({ coinList, tagName }: SimpleChanges) {
    if (tagName.currentValue && tagName.currentValue !== null &&
      coinList.currentValue && coinList.currentValue !== null) {
      this.pinColor = this.white; // reset
      const prefs = this.userprefs$[0];
      this.listCoins = coinList.currentValue;
      this.listName = tagName.currentValue.name;
      this.tagId = tagName.currentValue.id;
      if (prefs.hasOwnProperty('pinnedtags')) {
        if (prefs.pinnedtags.indexOf(this.tagId) > -1) {
          this.pinColor = this.blue;
        }
      }

    }
  }

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

  public tagSelected(tag): void {

    this.radList.listView.deselectAll();

    // navigate to tags list page
    this.navigateRoute('/tagsearch', 'slideBottom', 300, 'easeOut', tag);
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

  public pinToTop(args, tag): void {
    this.pinColor = (this.pinColor === this.white) ? this.blue : this.white;
    this.pinned = (this.pinColor === this.white) ? true : false;
    this.pinning(tag, this.pinned);
  }

  public pinning(tag: string, remove: boolean): void {
    const prefDocs = this.utilities.executeDBQuery(this.userprefsDB$, 'userprefs');
    let prefs: UserPrefs = { ...prefDocs[0] };
    if (!prefs.hasOwnProperty('pinnedtags')) {
      prefs = this.addToUserPrefs(prefs);
    }

    prefs = (remove) ? this.removeFromPinned(prefs, tag) : this.appendToPinned(prefs, tag);

    this.userprefsDB$.updateDocument(prefs._id, prefs);
    // toast

    this.tagChanged.emit(true);
  }

  public removeFromPinned(prefs: UserPrefs, tag: string): UserPrefs {
    const index = prefs.pinnedtags.indexOf(tag);

    if (index > -1) {
      const prefObj = { ...prefs };
      const tagArr = prefObj.pinnedtags;
      tagArr.splice(index, 1);
      prefObj.pinnedtags = tagArr;
      return prefObj;
    }
    return prefs;
  }

  public appendToPinned(prefs, newTag) {
    const pinnedObj = { ...prefs };
    const tags = pinnedObj.pinnedtags;
    if (pinnedObj.pinnedtags.indexOf(newTag) > -1) {
      return prefs;
    }
    tags.push(newTag);
    pinnedObj.pinnedtags = tags;
    return pinnedObj;
  }

  public addToUserPrefs(prefs) {
    prefs['pinnedtags'] = [];
    return prefs;
  }

}
