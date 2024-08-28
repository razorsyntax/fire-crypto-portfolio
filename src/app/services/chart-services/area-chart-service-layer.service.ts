import { Injectable } from "@angular/core";
import { GetService } from "~/app/services/Get.service";
import { Transactions } from "~/app/shared/interfaces/coin.interface";
import { UtilitiesProvider } from "~/app/providers/utilities.provider";
import { DateTimeUtilitiesProvider } from "~/app/providers/datetime-utilities.provider";
import { CoinIdsProvider } from "~/app/providers/coin.ids.provider";
import { DataSamplerProvider } from "~/app/providers/data-sampler.provider";

import * as _ from "lodash";

import { forkJoin, Observable } from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class AreaChartServiceLayerService {
  portfolioSymbols;
  portfolioDocs;

  constructor(
    private datetimeUtilities: DateTimeUtilitiesProvider,
    private coinIdsProvider: CoinIdsProvider,
    private sampler: DataSamplerProvider,
    private getDataService: GetService,
    private utilities: UtilitiesProvider
  ) {}

  candleSubscriptionArray(docs) {
    this.portfolioDocs = docs;
    const dateTimeMillis: number = this.datetimeUtilities.getCurrentDateTimeInMillis();
    if (docs.length > 0) {
      this.portfolioSymbols = docs.map(x => x.data.symbol_id); // symbol array
      const tempDatesArr = docs.map(x =>
        this.dayCalculation(dateTimeMillis, x.data.transactions)
      );
      const ohlcvCallArr = [];
      // aseembling custom OHLCV Call per coin
      // LIMIT CALLS TO 99
      for (let i = 0; i < tempDatesArr.length; i++) {
        const oldestDate: number = tempDatesArr[i];
        const dateFromDaysAgo: number = moment()
          .subtract(oldestDate + 1, "d")
          .unix();
        const currentTime: number = moment().unix();
        const sym: string = this.portfolioSymbols[i];

        if (this.coinIdsProvider.hasCGid(sym)) {
          ohlcvCallArr.push(
            this.getDataService.getMarketChart(
              this.coinIdsProvider.coin_ids[sym].id_cg,
              dateFromDaysAgo,
              currentTime,
              "USD"
            )
          );
        }
      }
      return ohlcvCallArr;
    } else {
      return [];
    }
  }

  // returns oldest transaction data in list of transactions
  dayCalculation(dateTimeMillis: number, transactions: Transactions[]): number {
    let acquireDate: number = this.oldestTransaction(transactions);
    return Math.round((dateTimeMillis - acquireDate) / 86400000);
  }

  getHistoricalData(
    forkJoinSubScriptionArray: Observable<{}[]>[]
  ): Observable<{}[]> {
    return forkJoin(forkJoinSubScriptionArray);
  }

  oldestTransaction(coinTransactions: Transactions[]): number {
    if (coinTransactions.length === 1) {
      return coinTransactions[0].datetime;
    }

    if (coinTransactions.length > 1) {
      return Math.min.apply(
        Math,
        coinTransactions.map(o => o.datetime)
      );
    }
  }

  calculateTotals(priceList: [number, number][]) {
    if (priceList[0] === undefined) {
      return [];
    }

    const totalsObj: { total?: number; date?: string } = {};

    for (let i = 0; i < this.portfolioDocs.length; i++) {
      let symbol: string = this.portfolioSymbols[i];
      if (this.coinIdsProvider.hasCGid(symbol)) {
        if (priceList[i].length > 0) {
          totalsObj[symbol] = this.initializeDailyTotals(priceList[i]);
        }
      }
    }

    for (let i = 0; i < Object.keys(totalsObj).length; i++) {
      let symbol = this.portfolioSymbols[i];
      totalsObj[symbol] = this.combineTotalsObj(
        priceList[i],
        symbol,
        totalsObj
      );
    }

    let finalTotals = [];
    for (let i = 0; i < this.portfolioSymbols.length; i++) {
      finalTotals.push(...totalsObj[this.portfolioSymbols[i]]);
    }
    if (finalTotals.length > 0) {
      let combinedValues = Object.values(_.groupBy(finalTotals, "date"));

      const formattedValues = combinedValues.map(item =>
        this.combinedItems(item)
      );

      finalTotals = _.orderBy(formattedValues, ["date"], "asc");

      let outputArr = finalTotals.map(item => ({
        Amount: item.total,
        //Date: moment(item.date).format('DD/MM/YYYY')
        Date: moment(item.date).valueOf()
      }));

      return outputArr;
    }
  }

  sampleData(data, sampleCount: number) {
    if (data.length >= sampleCount) {
      return this.sampler.largestTriangleThreeBuckets(
        data,
        sampleCount,
        "Amount",
        "Date"
      );
    }
    return data;
  }

  /**
   *
   * Combines totals for a single day
   */
  combinedItems(item) {
    let total = 0;
    if (item.length > 1) {
      for (let i = 0; i < item.length; i++) {
        total = total + item[i].total;
      }
    } else {
      total = item[0].total;
    }
    return {
      total: total,
      date: moment(item[0].date, "MM/DD/YYYY").valueOf()
    };
  }

  combinedDates(megaDates) {
    const combinedValues = _.values(
      _.groupBy(megaDates, ([d]) => moment(d).startOf("day"))
    );
    let tempArr = [];
    let finalValues = [];
    for (let i = 0; i < combinedValues.length; i++) {
      if (combinedValues[i].length > 1) {
        const multiple = combinedValues[i];
        let total = 0;
        for (let j = 0; j < multiple.length; j++) {
          total = total + multiple[j][1];
        }
        tempArr = [multiple[0][0], total];
        finalValues.push(tempArr);
      } else {
        finalValues.push(combinedValues[i][0]);
      }
    }
    return finalValues;
  }

  getDailyDates(datelist) {
    // chunk all same dates together
    const days = _.values(
      _.groupBy(datelist, ([d]) => moment(d).startOf("day"))
    );
    // reduce to latest date per day
    return days.map(item => this.keepOneDate(item)[0]);
  }

  keepOneDate(item) {
    if (item.length > 1) {
      const dates = item.map(x => x[0]);
      const largest = Math.max.apply(Math, dates);
      const testItem = item.filter(item => item[0] === largest);
      return testItem;
    } else {
      return item;
    }
  }

  combineTotalsObj(
    priceList,
    symbol,
    totalsObj
  ): { total: number; date: string }[] {
    const newTotals: { total: number; date: string }[] = [];
    let total = 0;

    let holdingsAmount = 0; // Keeps tracking of holdings.  Updates on new transactions

    const doc = this.portfolioDocs.filter(el => el.data.symbol_id === symbol);
    if (doc.length === 0) {
      return [];
    }
    const transactions = doc[0].data.transactions;
    let dailyDates = this.getDailyDates(priceList);

    // days since trqnsaction date
    const found = this.oldestTransaction(transactions);
    const oldestDate = moment(found).format("MM/DD/YYYY");
    const oldestDateISO = moment(oldestDate, "MM/DD/YYYY").valueOf();

    const isOldestDate = this.isOldestDay(dailyDates, oldestDateISO);
    // if transaction date is older than what the API provides,
    // we fill in the gap by adding days
    if (isOldestDate) {
      const additionalDates = this.createOldestDailies(
        dailyDates,
        oldestDateISO
      );
      const megaDates = additionalDates.concat(dailyDates);
      dailyDates = this.combinedDates(megaDates);
    }

    for (let i = 0; i < dailyDates.length; i++) {
      // 1 Day
      const dailyPrice = dailyDates[i];
      const priceDate: string = moment(dailyPrice[0]).format("DD/MM/YYYY");

      let todaysTransactions = transactions.filter(
        transaction =>
          moment(transaction.datetime).format("DD/MM/YYYY") === priceDate
      );

      if (todaysTransactions === undefined) {
        todaysTransactions = [];
      }

      holdingsAmount =
        todaysTransactions.length > 0
          ? this.utilities.calculateTotalAmount(todaysTransactions) +
            holdingsAmount
          : holdingsAmount;

      total = holdingsAmount * dailyPrice[1];

      newTotals.push({
        total: total,
        date: moment(dailyDates[i][0]).format("MM/DD/YYYY")
      });
    }
    return newTotals;
  }

  createOldestDailies(dailyDates, isoldestDate) {
    const dailies = this.datetimeUtilities.getAllDatesBetweenTwoDatesFormatted(
      isoldestDate,
      moment().valueOf()
    );
    return dailies.map(date => [moment(date).valueOf(), 0]);
  }

  isOldestDay(dailyList, oldestDateISO) {
    const numArr = dailyList.map(x => x[0]);
    const smallestNum = Math.min.apply(Math, numArr);

    if (oldestDateISO < smallestNum) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Returns an array of objects with date and total zero
   * @param price This day's price
   * @param todaysDate
   */
  initializeDailyTotals(priceList) {
    return priceList.map(x => {
      return {
        date: moment(x.timestamp).format("DD/MM/YYYY"),
        total: 0
      };
    });
  }
}
