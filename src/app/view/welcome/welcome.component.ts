import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { Page } from '@nativescript/core';

import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { Couchbase } from 'nativescript-couchbase';

import { localize } from '@nativescript/localize';

@Component({
  selector: 'welcome',
  moduleId: module.id,
  styleUrls: ['./welcome.component.scss'],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  readonly orange: string = '#e16806';
  readonly red: string = '#d21e06';

  userprefsDB$: Couchbase;
  userprefs$;
  userPrefDoc;

  slide1: string = localize('@@WelcomeComponent_Slide1_Title');
  slide1_sub: string = localize('@@WelcomeComponent_Slide1_Subtitle');
  slide2: string = localize('@@WelcomeComponent_Slide2_Title');
  slide2_sub: string = localize('@@WelcomeComponent_Slide2_Subtitle');
  slide3: string = localize('@@WelcomeComponent_Slide3_Title');
  slide3_sub: string = localize('@@WelcomeComponent_Slide3_Subtitle');
  getStartedButtonText: string = localize('@@WelcomeComponent_GetStarted_Button');

  constructor(
    private page: Page,
    private nav: RouterExtensions,
    private utilities: UtilitiesProvider,
    private portfolioDBService: DatabaseService
  ) {
    this.userprefsDB$ = this.portfolioDBService.getDataBase('userprefs');
    this.userprefs$ = this.utilities.executeDBQuery(this.userprefsDB$, 'userprefs');
    this.isFirstRun();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.style.background = `linear-gradient(to bottom, ${this.orange}, ${this.red})`;
    this.page.backgroundSpanUnderStatusBar = false;
  }

  isFirstRun() {
    this.userprefs$ = this.portfolioDBService.getDataBase('userprefs');
    this.userPrefDoc = this.utilities.executeDBQuery(this.userprefs$, 'userprefs');
    if (this.userPrefDoc.length > 0 && !this.userPrefDoc[0].firstrun) {
      this.nav.navigate(['/home'], {
        transition: {
          name: 'slideTop',
          duration: 300,
          curve: 'easeOut'
        }
      });
    }
  }

  itemSelected(item: number) {
    console.log(item);
  }

  private firstRun() {
    this.userPrefDoc[0].firstrun = false;
    this.userprefsDB$.updateDocument(this.userPrefDoc[0]._id, this.userPrefDoc[0]);
  }

  skipIntro() {
    this.firstRun();
    this.nav.navigate(['/home']);
  }
}
