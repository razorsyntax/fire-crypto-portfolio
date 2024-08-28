import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  titleText = `About`;

  paragraph1: string = `Cryptocurrency is slowly moving traditional financial institutions toward an inevitable obsolescence.  Fire Cryptocurrency Portfolio celebrates this financial revolution by making it easy to track your crypto holdings without sacrificing your privacy.`;
  paragraph2: string = `We collect no personally identifiable information and we encrypt your holdings within the app.  We have no servers or back end databases.`;
  paragraph3: string = `Your portfolio lives on your device.`;
  paragraph4: string = `We encourage feedback! Feel free to email us at biomance@protonmail.ch`;
  paragraph5: string = `Please note: We have a tiny dev team working swiftly to squash bugs, build enhancements, and answer emails. We try to answer every message as quickly as we can.`;
  
  constructor(private routerExtensions: RouterExtensions, page: Page) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;
   }

  ngOnInit() {
  }

  backToSettings() {
    this.routerExtensions.navigate(['/settings'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

}
