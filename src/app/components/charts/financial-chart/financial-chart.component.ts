import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { DateTimeUtilitiesProvider } from '~/app/providers/datetime-utilities.provider';
import { GetService } from '~/app/services/Get.service';
import { ConnectivityService } from '~/app/services/connectivity.service';
import { OHLCVCoinPaprika } from '~/app/shared/interfaces/getservice.interface';

export interface FinancialChart {
  Date: string;
  Amount: number;
}

@Component({
  selector: 'app-financial-chart',
  moduleId: module.id,
  templateUrl: './financial-chart.component.html',
  styleUrls: ['./financial-chart.component.scss']
})
export class FinancialChartComponent implements OnInit, OnDestroy, OnChanges {
  @Input() symbolAndRate;
  smallest: number;
  largest: number;
  min: number;
  max: number;
  lineColor: string;
  ohlcSourceItems$;

  historyService$;
  rate: any;

  hasData: boolean = true;

  loadSpinner: boolean = false;

  constructor(
    private datetimeUtilities: DateTimeUtilitiesProvider,
    private getDataService: GetService,
    private connectivity: ConnectivityService
  ) {
    this.getDataService = getDataService;
  }

  ngOnInit() { }

  ngOnChanges({ symbolAndRate }: SimpleChanges) {
    this.setLinearAxisMaxMin.bind(this);
    if (this.connectivity.hasConnectivity()) {
      if (symbolAndRate && symbolAndRate.currentValue !== null) {
        this.rate = symbolAndRate.currentValue.currencyrate;
        this.getOHLCVData(symbolAndRate.currentValue);
      }
    }
  }

  public async getOHLCVData(symbolAndRate) {
    this.loadSpinner = true;
    const startInterval = this.datetimeUtilities.get30DaysTimeFormat();
    this.ohlcSourceItems$ = this.getDataService
      .getOHLCV(symbolAndRate.symbol, startInterval, '', 30).pipe(
        map(res => this.addRateToResponse(res.content.toJSON(), this.rate)),
        tap(res => this.setLinearAxisMaxMin(res)),
        tap(res => this.setLineColor(res)),
        tap(res => {
          this.hasData = (res.length > 0) ? true : false;
          this.loadSpinner = !this.hasData;
          return res;
        }),
        map(res => this.formatFinancialData(res))
      );
  }

  ngOnDestroy() { }

  private addRateToResponse(res: OHLCVCoinPaprika[], rate): OHLCVCoinPaprika[] {
    for (let i = 0; i < res.length; i++) {
      res[i].close = res[i].close * rate;
    }
    return res;
  }

  private formatFinancialData(dataArr: OHLCVCoinPaprika[]): Observable<FinancialChart[]> {
    if (dataArr.length > 0) {
      return of(
        dataArr.map(x => ({
          Date: moment(x.time_close).format('MM/DD'),
          Amount: x.close
        }))
      );
    } else {
      return of([]);
    }
  }

  private smallestNumber(numArr): number {
    const tempArr = numArr.map(x => x.close);
    return Math.min.apply(Math, tempArr);
  }

  private largestNumber(numArr): number {
    const tempArr = numArr.map(x => x.close);
    return Math.max.apply(Math, tempArr);
  }

  private setLinearAxisMaxMin(dataArr): void {
    if (dataArr.length > 0) {
      const first = parseFloat(dataArr[0].close);
      const last = parseFloat(dataArr[dataArr.length - 1].close);

      let smallest: number = this.smallestNumber(dataArr);
      const smallestArr = [first, last, smallest];
      smallest = Math.min.apply(Math, smallestArr);

      let largest: number = this.largestNumber(dataArr);
      const largestArr = [first, last, largest];
      largest = Math.max.apply(Math, largestArr);

      // 0.95 & 1.05 to add padding to charts
      this.min = smallest * 0.95;
      this.max = largest * 1.05;
    }
  }

  private setLineColor(dataArr): void {
    if (dataArr.length > 0) {
      const oldest = parseFloat(dataArr[0].close);
      const newest = parseFloat(dataArr[dataArr.length - 1].close);
      this.lineColor = (oldest > newest) ? '#a82f27' : '#3ee129';
    }
  }

}
