import { Injectable } from '@angular/core';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
// import { CoinCalculationsProvider } from '~/providers/coin-calculations.provider';
import { CoinHoldings } from '~/app/shared/interfaces/coin.interface';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';

@Injectable()
export class CoinDataMapperProvider {

    constructor(
        private utilities: UtilitiesProvider,
        // private coinCalulations: CoinCalculationsProvider,
    ) { }

    coinDetailsCoinDataBox(tickers, coin, userprefs, rate: number) {
        const tickerItem = tickers.find(ticker => ticker.id === coin.id);
        const quotes = tickerItem.quotes['USD'];
        return {
            name: tickerItem.name,
            symbol: tickerItem.symbol,
            availablesupply: this.utilities.addCommasToNumbers(tickerItem.circulating_supply),
            marketcap: quotes.market_cap,
            twentyfourhrvol: quotes.volume_24h,
            percent24Hr: quotes.percent_change_24h,
            price: parseFloat(quotes.price) * rate,
            iconpath: this.utilities.setCryptoIconPath(tickerItem.symbol),
            id: tickerItem.id,
            defaultcurrency: userprefs.defaultcurrency
        }
    }

    coinDetailsPortfolioBox(tickers, coin, holdings: CoinHoldings, userprefs: UserPrefs, rate: number) {
        const tickerItem = tickers.find(ticker => ticker.id === coin.id);
        let coinHoldings = (holdings) ? this.utilities.calculateTotalAmount(holdings.transactions) : 0;
        coinHoldings = this.utilities.priceFormat(coinHoldings);
        const quotes = tickerItem.quotes['USD'];
        let ratePrice = (tickerItem !== undefined) ? parseFloat(quotes.price) * rate : NaN;
        return {
            name: tickerItem.name,
            holdings: coinHoldings,
            symbol: tickerItem.symbol,
            totalvalue: (tickerItem !== undefined) ? coinHoldings * parseFloat(quotes.price) : 0,
            price: ratePrice,
            iconpath: this.utilities.setCryptoIconPath(coin.symbol),
            id: tickerItem.id,
            defaultcurrency: userprefs.defaultcurrency
        }
    }

    portfolioListMapper(tickers, coinList, defaultCurrency: string, rate: number) {
        let holdings = this.utilities.calculateTotalAmount(coinList.data.transactions);
        holdings = this.utilities.priceFormat(holdings);
        const symbol_id: string = coinList.data.symbol_id;
        const symbol: string = coinList.data.symbol;
        const ticker = tickers.find(ticker => ticker.id === symbol_id);
        const quotes = ticker.quotes['USD'];
        return {
            id: ticker.id,
            crypto_icon: this.utilities.setCryptoIconPath(symbol),
            name: coinList.data.coin,
            percent_color: this.percentColorPortfolioList(quotes.percent_change_24h),
            price: (ticker) ? this.utilities.priceFormat(quotes.price) : NaN,
            pricetotal: (ticker) ? this.utilities.priceFormat((holdings * quotes.price) * rate) : NaN,
            symbol: symbol,
            numcoins: holdings,
            percent_change_24h: quotes.percent_change_24h,
            defaultcurrency: defaultCurrency
        }
    }

    // private percentChangeColor(percent): string {
    //     if (percent === 'n/a') {
    //         return '#3aa1e9';
    //     }
    //     if (percent > 0) {
    //         return '#3ee129'
    //     } else {
    //         return '#a82f27'
    //     }
    // }

    percentColorPortfolioList(percent) {
        if (isNaN(percent)) {
            return 'no-percent-color';
        }
        if (percent < 0) {
            return 'percent-down';
        } else {
            return 'percent-up';
        }
    }

}
