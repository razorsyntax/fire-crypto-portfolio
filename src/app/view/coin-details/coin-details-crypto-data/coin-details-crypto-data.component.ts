import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// import { CacheProvider } from '~/providers/cache.provider';
import { localize } from '@nativescript/localize';

@Component({
  selector: 'app-coin-details-crypto-data',
  moduleId: module.id,
  templateUrl: './coin-details-crypto-data.component.html',
  styleUrls: ['./coin-details-crypto-data.component.scss']
})
export class CoinDetailsCryptoDataComponent implements OnChanges {
  @Input() coinData;
  @Input() cryptoSymbolAndRate;

  showSpinner: boolean = false;

  statsText: string = localize('@@CoinDetailsTopBoxComponent_Stats');
  priceText: string = localize('@@CoinDetailsTopBoxComponent_Price');
  twentyFourHrChangeText: string = localize('@@CoinDetailsTopBoxComponent_24HrChange');
  marketcapTopText: string = localize('@@CoinDetailsTopBoxComponent_MarketCap');
  twentyFourHrTopText: string = localize('@@CoinDetailsTopBoxComponent_24hrVol');
  supplyText: string = localize('@@CoinDetailsTopBoxComponent_Supply');
  chartLengthText: string = localize('@@CoinDetailsComponent_ChartLength');

  readonly percentUp: string = 'percent-up';
  readonly percentDown: string = 'percent-down';

  exchangeRate: number;

  constructor(/*private cache: CacheProvider*/) { }

  ngOnChanges({ coinData, cryptoSymbolAndRate }: SimpleChanges) {
    if (coinData && coinData.currentValue && cryptoSymbolAndRate && cryptoSymbolAndRate.currentValue) {
      const rates = 1; // this.cache.getCache('exchangeRates');
      this.exchangeRate = rates; // rates.rates[coinData.currentValue.defaultcurrency];
      cryptoSymbolAndRate.currentValue.currencyrate = this.exchangeRate;
    }
  }

  isNumber(item: string | number): boolean {
    if (typeof item === 'number') {
      return true;
    }
    return false;
  }

  setPercentColor(num: number): string {
    if (num >= 0) {
      return this.percentUp;
    }
    if (num < 0) {
      return this.percentDown;
    }
  }

  loadTotalValue(amount: number) {
    return amount;
    // if (this.exchangeRate !== undefined) {
    //   return amount * this.exchangeRate;
    // } else {
    //   return amount;
    // }
  }

  loadSpinner(show: boolean) {
    this.showSpinner = show;
  }

}
