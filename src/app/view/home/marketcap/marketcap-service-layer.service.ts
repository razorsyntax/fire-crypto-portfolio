import { Injectable } from '@angular/core';
import { CryptoListItem } from '~/app/shared/interfaces/coin.interface';
import { MapToFormService } from '~/app/services/map-to-form-service/map-to-form.service';
import * as _ from 'lodash';
import { Ticker } from '~/app/shared/interfaces/getservice.interface';

@Injectable()
export class MarketCapServiceLayer {

    public coinData$; // : Observable
    public infiniteList;

    constructor(
        private mapToForm: MapToFormService
    ) { }

    public marketCap(tickers: Ticker[], defaultCurrency: string, rate: number): CryptoListItem[] {
        const marketCapArr = [];
        for (let i = 0; i < tickers.length; i++) {
            marketCapArr.push(
                this.mapToForm.mapToMarketCap(tickers[i], defaultCurrency, rate)
            );
        }
        return this.sortMarketCap(marketCapArr);
    }

    private sortMarketCap(unsorted: CryptoListItem[]): CryptoListItem[] {
        return _.sortBy(unsorted, 'rank');
    }

    public calculateGlobalMarketCap(globalMarketCap: number, price: number, availableSupply: number, rate: number): number {
        return globalMarketCap + (price * availableSupply * (1 / rate));
    }
}
