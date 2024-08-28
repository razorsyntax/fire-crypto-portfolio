import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { isAndroid, isIOS } from '@nativescript/core';
import { CacheProvider } from '~/app/providers/cache.provider';
import { localize } from '@nativescript/localize';

interface MarketHeader {
  marketcap: number;
  twentyfourhrvol: number;
  dominance: number;
  defaultCurrency: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-marketcap-header',
  templateUrl: './marketcap-header.component.html',
  styleUrls: ['./marketcap-header.component.scss']
})
export class MarketcapHeaderComponent implements OnInit, OnChanges {
  @Input() public globalMarketData: MarketHeader;
  public marketCapClass: string = '';
  public volumeClass: string = '';
  public dominanceClass: string = '';
  public exchangeRate: number;

  public marketcapHeaderText: string = localize('@@MarketcapHeaderComponent_MarketCap');
  public twentyFourHrVolText: string = localize('@@MarketcapHeaderComponent_24hrVol');
  public dominanceText: string = localize('@@MarketcapHeaderComponent_Dominance');

  constructor(private cache: CacheProvider) {
    if (isAndroid) {
      this.marketCapClass = 'textsize-lrg textfont-bold bold-weight';
      this.volumeClass = 'textsize-lrg textfont-bold bold-weight';
      this.dominanceClass = 'textsize-lrg textfont-bold bold-weight';
    }
    if (isIOS) {
      this.marketCapClass = 'textsize-med textfont-bold bold-weight';
      this.volumeClass = 'textsize-med textfont-bold bold-weight';
      this.dominanceClass = 'textsize-med textfont-bold bold-weight';
    }
  }

  ngOnInit() { }

  ngOnChanges({ globalMarketData }: SimpleChanges) {
    if (globalMarketData && globalMarketData.currentValue && !globalMarketData.firstChange) {
      const rates = this.cache.getCache('exchangeRates');
      this.exchangeRate = rates.data[globalMarketData.currentValue.defaultCurrency];
    }
  }

  public loadTotalValue(amount: number): number {

    return amount;
    // if (this.exchangeRate !== undefined) {
    //   return amount * this.exchangeRate;
    // } else {
    //   return amount;
    // }
  }

}
