import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CoinDetails } from '../../../shared/interfaces/coin.interface';
// import { CacheProvider } from '~/providers/cache.provider';

@Component({
  moduleId: module.id,
  selector: 'app-coin-details-portfolio-box',
  templateUrl: './coin-details-portfolio-box.component.html',
  styleUrls: ['./coin-details-portfolio-box.component.scss']
})
export class CoinDetailsPortfolioBoxComponent implements OnInit, OnChanges {
  @Input() headerObj: CoinDetails;
  @Input() defaultUserCurrency: string = 'USD';
  @Input() inPortfolio: boolean;
  @Input() inWatchlist: boolean;

  inPortfolioClass: string;
  inWatchlistClass: string;

  @Output() portfolioEvent = new EventEmitter();
  @Output() watchlistEvent = new EventEmitter();
  @Output() viewTransactionsEvent = new EventEmitter();

  portfolioIcon = String.fromCharCode(0xf51e);
  watchlistIcon = String.fromCharCode(0xf06e);
  plusIcon = String.fromCharCode(0xf055);

  showAddToPortfolioPlusBtn: string;

  exchangeRate: number;

  constructor(/*private cache: CacheProvider*/) { }

  ngOnInit() {
    this.loadTopDetails();
  }

  ngOnChanges({ headerObj, inWatchlist, inPortfolio }: SimpleChanges) {
    if (headerObj && headerObj.currentValue) {
      const rates = 1; // this.cache.getCache('exchangeRates');
      this.exchangeRate = rates;// rates.rates[headerObj.currentValue.defaultcurrency];
      this.loadTopDetails();
    }

    if (inWatchlist && typeof inWatchlist.currentValue === 'boolean') {
      this.inWatchlistClass = (this.inWatchlist) ? 'in-watchlist' : 'not-in-watchlist';
    }

    if (inPortfolio && typeof inPortfolio.currentValue === 'boolean') {
      this.inPortfolioClass = (this.inPortfolio) ? 'in-portfolio' : 'not-in-portfolio';
      this.showAddToPortfolioPlusBtn = (this.inPortfolio) ? 'hide-plus-button' : 'show-plus-button';
    }
  }

  isNumber(item: string | number): boolean {
    if (typeof item === 'number') {
      return true;
    }
    return false;
  }

  viewTransactions(cryptoId: string): void {
    this.viewTransactionsEvent.emit(cryptoId);
  }

  loadTopDetails() {
    this.inPortfolioClass = (this.inPortfolio) ? 'in-portfolio' : 'not-in-portfolio';
    this.showAddToPortfolioPlusBtn = (this.inPortfolio) ? 'hide-plus-button' : 'show-plus-button';
    this.inWatchlistClass = (this.inWatchlist) ? 'in-watchlist' : 'not-in-watchlist';
  }

  loadTotalValue(amount: number): number {
    if (this.exchangeRate !== undefined) {
      return amount * this.exchangeRate;
    } else {
      return amount;
    }
  }

  togglePortfolio(symbol) {
    if (symbol) {
      this.portfolioEvent.emit(symbol);
    }
  }

  toggleWatchlist(symbol, name, id) {
    if (name !== undefined && symbol !== undefined) {
      this.watchlistEvent.emit({
        name: name,
        symbol: symbol,
        id: id
      });
    }
  }

}
