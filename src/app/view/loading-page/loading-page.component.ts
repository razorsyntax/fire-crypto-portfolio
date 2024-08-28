import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { Couchbase } from 'nativescript-couchbase';
import { UserPrefsService } from '~/app/services/userprefs.service';
import { ApplicationEventsService } from '~/app/services/application-events.service';
import { DatabaseService } from '~/app/services/database-service/database.service';

interface TransitionOptions {
  name?: string;
  duration?: number;
  curve?: string;
}

@Component({
  selector: 'app-loading-page',
  moduleId: module.id,
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit, AfterViewInit {

  userprefsDB$: Couchbase;
  userprefs$;
  userPrefDoc;

  readonly orange: string = '#e16806';
  readonly red: string = '#d21e06';

  constructor(
    private page: Page,
    private nav: RouterExtensions,
    private utilities: UtilitiesProvider,
    private portfolioDBService: DatabaseService,
    private userPrefs: UserPrefsService,
    private applicationEvents: ApplicationEventsService
  ) {
    this.applicationEvents.fireEvents();
   }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundSpanUnderStatusBar = false;
  }

  ngAfterViewInit() {
    this.navigateRoute('/welcome', 'slideTop', 300, 'easeOut');
    this.isFirstRun();
  }

  isFirstRun() {
    this.userPrefs.setUserPrefsOnLoad();

    this.userprefs$ = this.portfolioDBService.getDataBase('userprefs');
    this.userPrefDoc = this.utilities.executeDBQuery(this.userprefs$, 'userprefs');
    if (this.userPrefDoc.length > 0) {
      if (!this.userPrefDoc[0].firstrun) {
        this.navigateRoute('/home', 'slideTop', 300, 'easeOut');
      } else {
        this.navigateRoute('/welcome', 'slideTop', 300, 'easeOut');
      }
    } else {
      this.navigateRoute('/welcome', 'slideTop', 300, 'easeOut');
    }
  }

  navigateRoute(route: string, name: string, duration: number, curve: string) {
    this.nav.navigate([route], {
      transition: this.transitionOptions(name, duration, curve)
    });
  }

  transitionOptions(name: string, duration: number, curve: string): TransitionOptions {
    return {
      name: name,
      duration: duration,
      curve: curve
    };
  }

}
