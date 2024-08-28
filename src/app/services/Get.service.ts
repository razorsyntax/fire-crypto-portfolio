import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@nativescript/core';
import { defer, from, Observable } from 'rxjs';

@Injectable()
export class GetService {

  // defaultCurrency = 'USD';
  private readonly coinPaprikaAPIVersion = 'v1/';
  private readonly coinPaprikaAPI = 'https://api.coinpaprika.com/';
  private readonly coinPaprikaBaseURL = `${this.coinPaprikaAPI}${this.coinPaprikaAPIVersion}`;

  private readonly coinGeckoAPIVersion = 'v3/';
  private readonly coinGeckoAPI = 'https://api.coingecko.com/api/';
  private readonly coinGeckoBaseURL = `${this.coinGeckoAPI}${this.coinGeckoAPIVersion}`;

  // https://exchangerate.host/
  private readonly exchangeRateBaseURL = 'https://api.exchangerate.host/latest';

  // private readonly cryptoControlAPIVersion = 'v1/';
  // private readonly cryptoControlBaseURL = `https://cryptocontrol.io/api/${this.cryptoControlAPIVersion}/public/`;
  // private readonly cryptoControlAPIKey = 'b7574f8fa2ce850e0f643f2396cd8b2f';

  // Gold/Silver Spot Prices
  private readonly stooqBaseURL = 'https://stooq.com/';



  constructor() {
    // load userprefs and set default currency
    // this.defaultCurrency = userprefs.defaultCurrency
  }


  private payloadData(url: string, method: string, contentType?: string) {

    const payload = {
      url,
      method,
    };

    if (contentType) {
      payload['headers'] = { 'Content-Type': contentType };
    }

    return payload;
  }

  /**
   *
   * EXCHANGE RATE API
   */

  /**
   * EXCHANGE RATES
   * Ex. 'USD'
   */
  public getExchangeRates(baseCurrency?: string): Promise<HttpResponse> {
    const exchange_rates: string = (baseCurrency) ? `?base=${baseCurrency}` : '&base=USD';
    const url: string = `${this.exchangeRateBaseURL}${exchange_rates}`;
    const payload = this.payloadData(url, 'GET');
    return Http.request(payload);
  }

  /**
   *
   * COIN GECKO
   */

  // /**
  //  * Exchange Rates
  //  * Gets exchange rates for fiat & crypto
  //  */
  // getExchangeRates(): Observable<ExchangeRates> {
  //   const exchange_rates = 'exchange_rates';
  //   return this.http.get<ExchangeRates>(`${this.coinGeckoBaseURL}${exchange_rates}`, { headers: this.headers });
  // }

  /**
   * MARKET CHART
   * Gets Price & Date Data
   */
  /**
   * DEPRECATED.  USE OHLC DATA INSTEAD
   */
  public getMarketChart(coin_symbol: string, start, end, usercurrency?: string): Promise<HttpResponse> {
    const exchange_rates: string = 'coins';
    const marketChartURL: string = `${this.coinGeckoBaseURL}${exchange_rates}/${coin_symbol}/market_chart/range?vs_currency=${usercurrency}&from=${start}&to=${end}`;
    const payload = this.payloadData(marketChartURL, 'GET');
    return Http.request(payload);
  }

  /**
   * COIN LIST
   * IMPORTANT: This is NOT used in Production.
   * It's used by the Coin ID Stitcher Utility
   */
    /**
   * DEPRECATED.  USE getOHLCV() INSTEAD
   */
  public getCoinList() {
    const url: string = `${this.coinGeckoBaseURL}coins/list`;
    const payload = this.payloadData(url, 'GET');
    return Http.request(payload);
  }

  /**
   *
   * COIN PAPRIKA
   */

  /**
   * TICKERS
   * Get tickers for all coins or one coin at a time
   */
  public getTickers(coin_id?: string): Promise<HttpResponse> {
    const tickers: string = 'tickers';
    const coinID: string = (coin_id) ? `/${coin_id}` : '';
    const url: string = `${this.coinPaprikaBaseURL}${tickers}${coinID}`;
    const payload = this.payloadData(url, 'GET');
    return Http.request(payload);
  }

  /**
   * Exchanges
   * Get all Exchanges
   */
  public getExchanges(): Promise<HttpResponse> {
    const tickers: string = `${this.coinPaprikaBaseURL}exchanges`;
    const payload = this.payloadData(tickers, 'GET');
    return Http.request(payload);
  }

  /**
   * Exchange Trading Pairs
   * Get all Exchanges supported by API or gets all trading pairs by market ID
   *
   * Ex: Call exchange_id = 'binance' and it retrieves all tradings pairs
   */
  public getExchangesTradingPairs(exchange_id: string): Promise<HttpResponse> {
    const exchanges: string = 'exchanges';
    const exchangeIDUrl: string = `${this.coinPaprikaBaseURL}${exchanges}/${exchange_id}/markets`;
    const payload = this.payloadData(exchangeIDUrl, 'GET');
    return Http.request(payload);
  }

  /**
   * Global
   * Get Global Crypto Market Data
   *
   */
  public getGlobal(): Promise<HttpResponse> {
    const global: string = `${this.coinPaprikaBaseURL}global`;
    const payload = this.payloadData(global, 'GET');
    return Http.request(payload);
  }

  /**
   * Tags
   * Get Tags w/Addtional Fields?additional_fields=coins,icos
   */
  public getTags(): Promise<HttpResponse> {
    const global: string = `${this.coinPaprikaBaseURL}tags?additional_fields=coins`;
    const payload = this.payloadData(global, 'GET');
    return Http.request(payload);
  }

  /**
   * OHLCV
   * Open/High/Low/Close values with volume and market_cap
   *
   * If end_date is not provided, it will use `limit` to determine length of time.
   *
   * Ex: If you give it a start date and pass `limit=30`, it'll return 30 days of data.
   */
  public getOHLCV(coin_id: string, start_date: string, end_date: string, limit?: number, quote?: string): Observable<HttpResponse> {
    quote = (quote) ? quote : '';
    const ohlcvUrl: string = `${this.coinPaprikaBaseURL}coins/${coin_id}/ohlcv/historical?start=${start_date}&end=${end_date}&limit=${limit}&quote=${quote}`;
    const payload = this.payloadData(ohlcvUrl, 'GET');
    return defer(() => from(Http.request(payload)));
  }

  /**
   * Coin by Id
   */
  public getCoinById(id: string): Promise<HttpResponse> {
    const coinById: string = `${this.coinPaprikaBaseURL}coins/${id}`;
    const payload = this.payloadData(coinById, 'GET');
    return Http.request(payload);
  }

  /**
   * Coins By Tags
   */
  public getCoinsByTagId(id: string): Promise<HttpResponse> {
    const coinById: string = `${this.coinPaprikaBaseURL}tags/${id}?additional_fields=coins`;
    const payload = this.payloadData(coinById, 'GET');
    return Http.request(payload);
  }

  /**
   * CRYPTO CONTROL
   */
  // public getCryptFeedByCoin(id: string): Promise<HttpResponse> {
  //   const coinByIdUrl: string = `${this.cryptoControlBaseURL}feed/coin/${id}?key=${this.cryptoControlAPIKey}`;
  //   const payload = this.payloadData(coinByIdUrl, 'GET');
  //   console.log(payload);
  //   return Http.request(payload);
  // }

  /**
   * Precious Metals spot price in USD. Not historic.
   * Gold: xauusd
   * Silver: xagusd
   * 
   * https://stooq.com/q/l/?s=${preciousMetal}&f=sd2t2ohlc&h&e=json
   */
  public getPreciousMetalsPrice(preciousMetal: string): Promise<HttpResponse> {
    const metalBySymbolUrl: string = `${this.stooqBaseURL}q/l/?s=${preciousMetal}&f=sd2t2ohlc&h&e=json`;
    const payload = this.payloadData(metalBySymbolUrl, 'GET');
    return Http.request(payload);
  }

  /**
   * Precious Metals Historic
   * 
   * Returns a text csv in the format:
   *    "Date,Open,High,Low,Close
   *    1792-03-01,1.29,1.29,1.29,1.29
   *    1792-06-01,1.29,1.29,1.29,1.29
   *    1792-09-01,1.29,1.29,1.29,1.29
   *    1792-12-01,1.29,1.29,1.29,1.29
   *    1793-03-01,1.29,1.29,1.29,1.29
   *    1793-06-01,1.29,1.29,1.29,1.29
   *    1793-09-01,1.29,1.29,1.29,1.29
   *    ..."
   * 
   * Use case:
   * this.getService$.getPreciousMetalsHistoricPrice('xagusd').pipe(
   *    map(csv => this.metalsCSVtoJSON(csv))
   * ).subscribe(res => {
   *    console.log('Successful parsing');
   *  }, error => {
   *    console.log(error.message);
   *  });
   */
  public getPreciousMetalsHistoricPrice(preciousMetal: string): Promise<HttpResponse> {
    const metalBySymbolUrl: string = `${this.stooqBaseURL}q/d/l/?s=${preciousMetal}&i=d`;
    // return this.http.get(metalBySymbol, { responseType: 'text' }); <--- NOTE REPONSE TYPE
    const payload = this.payloadData(metalBySymbolUrl, 'GET', 'text');
    return Http.request(payload);
  }

  // USED FOR getPreciousMetalsHistoricPrice API CALL
  // private metalsCSVtoJSON(csv) {

  //   var lines = csv.split('\n');

  //   var result = [];

  //   var headers = lines[0].split(',');
  //   headers = headers.map(header => header.trim());
  //   lines.splice(0, 1);
  //   lines.forEach(function (line) {
  //     var obj = {};
  //     var currentline = line.split(',');
  //     headers.forEach(function (header, i) {
  //       currentline = currentline.map(item => item.trim());
  //       obj[header] = currentline[i];
  //     });
  //     result.push(obj);
  //   });

  //   const lastItem = result[result.length-1];

  //   if(lastItem.Date === '') {
  //     result.pop();
  //   }

  //   return result;
  // }

  /**
   * Symbols for Metals:
   * XAUUSD : Gold
   * XAGUSD : Silver
   * XPTUSD : Platinum
   * XPDUSD : Palladium
   */



}
