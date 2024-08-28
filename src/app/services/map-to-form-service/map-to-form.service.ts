import { Injectable } from '@angular/core';
import { CoinForm, CoinData, CryptoListItem } from './../../shared/interfaces/coin.interface';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
// import { CoinCalculationsProvider } from '~/providers/coin-calculations.provider';
// import { MarketCapList } from '~/shared/interfaces/coin.interface';
import { Ticker, PriceQuote } from '~/app/shared/interfaces/getservice.interface';
import { Transaction } from '~/app/shared/interfaces/database.interface';

@Injectable()
export class MapToFormService {

    constructor(
        private utilities: UtilitiesProvider,
        // private coinCalulations: CoinCalculationsProvider
    ) { }

    /**
     * Maps existing transaction data to Portfolio Forms
     * @param transactionData 
     * @param name 
     * @param symbol 
     */
    mapToPortfolioForm(transactionData: Transaction, name: string, symbol: string, symbol_id: string): CoinForm {
        return {
            amount: Math.abs(transactionData.amount),
            transactionid: transactionData.transactionid,
            dateadded: transactionData.dateadded,
            timeadded: transactionData.timeadded,
            datetime: transactionData.datetime,
            type: 'portfolio',
            obtained: transactionData.obtained || '',
            exchange: transactionData.exchange || '',
            exchange_id: transactionData.exchange_id || '',
            tradingpair: transactionData.tradingpair || '',
            tradingpair_id: transactionData.tradingpair_id || '',
            fee: 0,
            transferredTo: (transactionData.transactiontype === 'transfer') ? transactionData.transferredTo : '',
            transferredFrom: (transactionData.transactiontype === 'transfer') ? transactionData.transferredFrom : '',
            coin: name,
            symbol: symbol,
            symbol_id: symbol_id,
            buyselltransfer: transactionData.transactiontype || ''
        };
    }

    /**
     * Maps transaction data for new transaction in Portfolio Form
     * @param coinData
     */
    mapToNewPortfolioForm(coinData: CoinData): CoinForm {
        return {
            amount: undefined,
            transactionid: '',
            dateadded: '',
            timeadded: '',
            datetime: '',
            type: 'portfolio',
            obtained: '',
            exchange: '',
            exchange_id: '',
            tradingpair: '',
            tradingpair_id: '',
            fee: 0,
            transferredTo: '',
            transferredFrom: '',
            coin: coinData.name,
            symbol: coinData.symbol,
            symbol_id: coinData.id,
            buyselltransfer: 'buy'
        };
    }

    mapToMarketCap(ticker: Ticker, defaultcurrency: string, rate: number): CryptoListItem {
        const quotes: PriceQuote = ticker.quotes['USD'];
        return {
            name: ticker.name,
            price: quotes.price * rate,
            percent_change_24h: quotes.percent_change_24h,
            percent_color: this.percentColor(quotes.percent_change_24h),
            crypto_icon: this.utilities.setCryptoIconPath(ticker.symbol),
            supply: ticker.circulating_supply,
            marketcapVol: quotes.market_cap * rate,
            id: ticker.id,
            symbol: ticker.symbol,
            defaultcurrency: defaultcurrency,
            rank: ticker.rank
        };
    }

    mapToWatchlist(ticker, defaultcurrency: string, rate: number): CryptoListItem {
        const quotes: PriceQuote = ticker.quotes['USD'];
        return {
            name: ticker.name,
            price: quotes.price * rate,
            percent_change_24h: quotes.percent_change_24h,
            percent_color: this.percentColor(quotes.percent_change_24h),
            crypto_icon: this.utilities.setCryptoIconPath(ticker.symbol),
            supply: ticker.circulating_supply,
            marketcapVol: quotes.market_cap * rate,
            id: ticker.id,
            symbol: ticker.symbol,
            defaultcurrency: defaultcurrency,
            rank: ticker.rank
        }
    }

    calculatemarketCap(availableSupply: number, price: number): number {
        return availableSupply * price;
    }

    private percentColor(percent: number): string {
        return (percent < 0) ? 'percent-down' : 'percent-up';
    }

}