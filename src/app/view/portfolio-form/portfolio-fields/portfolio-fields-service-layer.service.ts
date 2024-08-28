import { Injectable } from '@angular/core';
import { Exchanges } from '~/app/shared/interfaces/getservice.interface';
import { BehaviorSubject, defer, from } from 'rxjs';
import { GetService } from '~/app/services/Get.service';
import * as _ from 'lodash';
import { ApiFixerProvider } from '~/app/providers/api-fixer.provider';


@Injectable()
export class PortfolioFieldsServiceLayer {

    exchangeField: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    tradingPairField: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private getexchangeData: GetService, private exchangeNames: ApiFixerProvider) { }

    formatExchanges(exchanges): Exchanges[] {
        let exchangeArr: ArrayLike<{ id: string, title: string }> = exchanges.map(exchangeItem => {
            if (exchangeItem.active) {
                return { id: exchangeItem.id, title: exchangeItem.name }
            }
        });
        exchangeArr = _.compact(exchangeArr);
        return _.sortBy(exchangeArr, 'title');
    }

    convertExchangeNames(exchangeIDs: string[]): string[] {
        const actualNames = [];
        for (let i = 0; i < exchangeIDs.length; i++) {
            actualNames.push(this.exchangeNames.getActualExchangeName(exchangeIDs[i]));
        }
        return actualNames;
    }

    formatDate(result): string {
        const month = (result['month'] > 9) ? result['month'] : `0${result['month']}`;
        const day = (result['day'] > 9) ? result['day'] : `0${result['day']}`;
        const year = result['year'];
        return `${month}-${day}-${year}`;
    }

    formatTime(result): string {
        let hour = (result.hour > 12) ? (result.hour - 12) : result.hour;
        hour = (hour > 9) ? hour : `0${hour}`;
        const minute = (result.minute > 9) ? result.minute : `0${result.minute}`;
        const meridiem = (result.hour > 12) ? 'PM' : 'AM';
        return `${hour}:${minute} ${meridiem}`;
    }

    setObtainedText(obtained): string {
        switch (obtained) {
            case 'airdrop':
                return 'Airdrop';
            case 'exchange':
                return 'On Exchange';
            case 'mined':
                return 'Mined';
            case 'transfer':
                return 'Transfer';
            case 'dividend':
                return 'Dividend';
            default:
                return 'Invalid selection'
        }
    }

    checkExchangeCache(exchangeCache) {
        const cacheData = exchangeCache.getCache('exchangelist');
        if (cacheData) {
            return cacheData;
        }
        return false;
    }

    loadExchange() {
        const getExchangesCall$ = defer(() => from(this.getexchangeData.getExchanges()));
        return getExchangesCall$;
    }

    loadTradingPairs(exchange_id: string) {
        const getExchangesTradingPairsCall$ = defer(() => from(this.getexchangeData.getExchangesTradingPairs(exchange_id)))
        return getExchangesTradingPairsCall$;
    }
}