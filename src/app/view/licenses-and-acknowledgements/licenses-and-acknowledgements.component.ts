import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { SectionItems } from './section.interface';
import { localize } from '@nativescript/localize';

@Component({
  moduleId: module.id,
  selector: 'app-licenses-and-acknowledgements',
  templateUrl: './licenses-and-acknowledgements.component.html',
  styleUrls: ['./licenses-and-acknowledgements.component.scss']
})
export class LicensesAndAcknowledgementsComponent implements OnInit {

  titleText: string = localize('@@LicensesAndAcknowledgementComponent_TitleText');

  sectionItems: SectionItems[] = [
    {
      section: [{
        subsection: 'Nativescript {N}',
        link: 'https://nativescript.org/'
      }],
      sectiontitle: 'Proudly Built with Nativescript'
    }, {
      section: [{
        subsection: 'Some Data Provided by CoinGecko',
        link: 'https://www.coingecko.com/'
      }, {
        subsection: 'Some Data Provided by CoinPaprika',
        link: 'https://coinpaprika.com/'
      }, {
        subsection: 'Exchange rates provided by ExchangeRate-API',
        link: 'https://www.exchangerate-api.com'
      }, {
        subsection: 'News and social data provided by CryptoControl',
        link: 'https://cryptocontrol.io/'
      }],
      sectiontitle: localize('@@LicensesAndAcknowledgementComponent_CryptoData')
    }, {
      section: [{
        subsection: 'Atomic Labs',
        link: 'http://cryptoicons.co'
      }],
      sectiontitle: localize('@@LicensesAndAcknowledgementComponent_CryptoIcons')
    }, {
      section: [{
        subsection: 'Font Awesome',
        link: 'https://fontawesome.com/'
      }, {
        subsection: 'IcoMoon',
        link: 'https://icomoon.io/'
      }, {
        subsection: 'Google Fonts',
        link: 'https://fonts.google.com/'
      }],
      sectiontitle: localize('@@LicensesAndAcknowledgementComponent_Fonts')
    }
  ];

  rowString: string = '';

  constructor(private routerExtensions: RouterExtensions, page: Page) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    this.rowString = this.buildGrid(this.sectionItems.length);
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

  buildGrid(length: number): string {
    let row = 'auto';
    for (let i = 0; i < length; i++) {
      row = row + ',auto';
    }
    return row;
  }

}
