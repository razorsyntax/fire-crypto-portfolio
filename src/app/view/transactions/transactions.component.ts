import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { localize } from '@nativescript/localize';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { NavHistoryProvider } from '~/app/providers/nav-history.provider';

@Component({
  selector: 'app-transactions',
  moduleId: module.id,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  inThisPortfolio: boolean;
  inPortfolio: boolean;
  transactionItems;
  imagepath: string;

  titleText = localize('@@TransactionComponent_Title');

  constructor(
    public page: Page,
    private route: ActivatedRoute,
    private utilities: UtilitiesProvider,
    private routerExtensions: RouterExtensions,
    private navigationHistory: NavHistoryProvider
  ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    this.route.queryParams.subscribe(params => {
      const currentCoin = JSON.parse(params.currentCoin);
      this.inThisPortfolio = true;
      this.inPortfolio = true;
      this.transactionItems = params;
      const sym = currentCoin.symbol.toLowerCase();
      this.imagepath = this.utilities.setCryptoIconPath(sym);
    })
  }

  ngOnInit() {
  }

  transactionRemoved(event): void {
    if (event) {
      this.clearPortfolioData();
    }
  }

  private clearPortfolioData(): void {
    this.inThisPortfolio = false;
    this.inPortfolio = false;
    this.transactionItems = { currentCoin: null, transactions: [] };
  }

  close() {
    this.navigationHistory.previousNavigation = 'transactions';
    this.routerExtensions.navigate(['/coindetails'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }
}
