import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatabaseService } from './../../../../services/database-service/database.service';
import { RouterExtensions } from '@nativescript/angular';
import { UtilitiesProvider } from './../../../../providers/utilities.provider';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-portfolio-header',
  moduleId: module.id,
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit, OnChanges {
  @Input() priceNIntervals;
  @Input() userprefs: UserPrefs;

  defaultUserCurrency: string;

  portfolioTotal = 0;
  portfolioDB;

  deviceWidth;

  constructor(
    private dataBaseService: DatabaseService,
    private routerExtensions: RouterExtensions,
    private utilities: UtilitiesProvider) {
    this.portfolioDB = this.dataBaseService.getDataBase('portfolio');
  }

  ngOnInit() { }

  ngOnChanges({ priceNIntervals, userprefs }: SimpleChanges) {
    if (priceNIntervals && priceNIntervals.currentValue) {
      const tickers = priceNIntervals.currentValue[1];
      const exchangeRates = priceNIntervals.currentValue[2];
      this.setTotal(tickers, exchangeRates).subscribe(total => {
        this.portfolioTotal = total;
      });

    }

    if (userprefs && userprefs.currentValue) {
      this.defaultUserCurrency = userprefs.currentValue.defaultcurrency;
    }
  }

  setTotal(tickers, exchangeRates): Observable<any> {
    const docs = this.utilities.executeDBQuery(this.portfolioDB, 'portfolio');
    const symbolArr = this.utilities.createSymbolArr(docs);
    const exchangeRate = 1 ;// [this.userprefs.defaultcurrency];
    if (symbolArr && symbolArr.length) {
      const calTotTemp = this.calculateTotal(tickers, docs, exchangeRate);
      return of(calTotTemp);
    } else {
      return of(0)
    }
  }

  searchCoin(): void {
    this.routerExtensions.navigate(['/search'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  openSettings(): void {
    this.routerExtensions.navigate(['/settings'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  calculateTotal(tickers, docs, rate: number) {
    let total = 0;
    let symbol_id;
    for (let i = 0; i < docs.length; i++) {
      symbol_id = docs[i].data.symbol_id; // replace with -> docs[i].data.symbol_id
      const amount = this.utilities.calculateTotalAmount(docs[i].data.transactions);
      // console.log('portfolio-header: tickers.filter');
      const tickerItem = tickers.filter(coin => coin.id === symbol_id); // replace with coin.id ... Ex. "btc-bitcoin"
      // console.log('--------------');
      // Some coins have no price data, so we don't count it toward the total
      if (tickerItem.length > 0) {
        const price = tickerItem[0].quotes['USD'].price;
        total = total + (amount * price * rate);
      }
    }
    return total;
  }

    ngOnDestroy() { }
  }
