import { Injectable } from '@angular/core';
import { GetService } from '~/app/services/Get.service';
import { Subscription, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

interface JoinedIds {
    id?: string;
    id_cg?: string;
    symbol?: string;
    symbol_cg?: string;
    name?: string;
    name_cg?: string;
}

@Injectable()
export class CoinIdStitcherUtility {

    dataCall$: Subscription;

    tickers;
    coinList;

    constructor(private getService: GetService) {
        this.tickers = this.getService.getTickers();
        this.coinList = this.getService.getCoinList();
    }

    runCall() {
        const srcs: any[][] = [this.tickers, this.coinList]
        forkJoin(srcs).pipe(
            map((items) => {
                return this.sticher(items[0], items[1]);
            }),
            map(mapped => _.compact(mapped)),
            map(mapped => this.createJSON(mapped))
        ).subscribe(mapped => {
            console.log(JSON.stringify(mapped));
        });
    }

    sticher(tickers, coinList): JoinedIds[] {
        return tickers.map(ticker => {
            const tickerSymbol = ticker.symbol;
            const coinItem = (coinList.filter(coin => {
                if (coin.symbol === tickerSymbol.toLowerCase()) {
                    return coin;
                }
            }));
            if (coinItem.length > 0) {
                return {
                    id: ticker.id,
                    id_cg: coinItem[0].id,
                    symbol: ticker.symbol,
                    symbol_cg: coinItem[0].symbol,
                    name: ticker.name,
                    name_cg: coinItem[0].name
                };
            } else {
                return {
                    id: ticker.id,
                    id_cg: '',
                    symbol: ticker.symbol,
                    symbol_cg: '',
                    name: ticker.name,
                    name_cg: ''
                };
            }
        });
    }

    createJSON(mapped) {
        const newJSON = {};
        for (let i = 0; i < mapped.length; i++) {
            newJSON[mapped[i].id] = mapped[i];
        }
        return newJSON;
    }
}
