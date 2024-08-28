import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ChartData } from '~/shared/interfaces/coin.interface';
import { AreaChartServiceLayerService } from '../../../services/chart-services/area-chart-service-layer.service';

import { /*Observable,*/ of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as _ from 'lodash';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';
import { ConnectivityService } from '~/app/services/connectivity.service';
import { CacheProvider } from '~/app/providers/cache.provider';

@Component({
  selector: 'app-area-chart',
  moduleId: module.id,
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Output() toggleSpinner = new EventEmitter();

  hasData: boolean = true;

  portfolioDB: any;
  portfolioDocs;
  areaSource$; /*: Observable<ChartData[]> = new Observable<ChartData[]>()*/
  max: number;
  min: number;
  lineColor: string = '#181818';
  fillColor: string = '#181818';
  portfolioSymbols: string[];

  constructor(
    private dataBaseService: DatabaseService,
    private utilities: UtilitiesProvider,
    private connectivity: ConnectivityService,
    private cache: CacheProvider,
    private areaChartServiceLayer: AreaChartServiceLayerService) {
    this.portfolioDB = this.dataBaseService.getDataBase('portfolio');
  }

  ngOnInit(): void {
    if (this.connectivity.hasConnectivity()) {
      this.loadCharts();
    }
  }

  private toggleChartSpinner(spin: boolean): void {
    this.toggleSpinner.emit(spin);
  }

  public async loadCharts() {
    this.toggleChartSpinner(false);
    this.portfolioDocs = this.utilities.executeDBQuery(this.portfolioDB, 'portfolio');
    const subscriptionArr = this.areaChartServiceLayer.candleSubscriptionArray(this.portfolioDocs);
    if (subscriptionArr.length > 0) {
      this.areaSource$ = this.areaChartServiceLayer
        .getHistoricalData(subscriptionArr).pipe(
          map((prices) => prices.map((price) => price['prices'])),
          map((res) => this.areaChartServiceLayer.calculateTotals(res)),
          map((res) => this.areaChartServiceLayer.sampleData(res, 200)),
          tap((res) => this.cache.setCache(res, 'areaChart')),
          tap((res) => this.setLineColor(res)),
          tap((res) => this.setLinearAxisMaxMin(res)),
          tap((res) => this.chartHasData(res)),
          tap(() => this.toggleChartSpinner(true))
        );
    } else {
      this.areaSource$ = of(subscriptionArr);
      this.hasData = false;
      this.toggleChartSpinner(true);
    }
  }

  private setLineColor(outputArr): void {
    if (outputArr && outputArr.length > 0) {
      const largest = this.largestNumber(outputArr);
      const last = outputArr[outputArr.length - 1];
      this.lineColor = (last.Amount >= largest) ? '#3ee129' : '#a82f27'; // green : red
    }
  }

  private chartHasData(res) {
    this.hasData = (res.length > 0) ? true : false;
  }

  private smallestNumber(numArr): number {
    if (numArr) {
      const tempArr = numArr.map((x) => x.Amount);
      return Math.min.apply(Math, tempArr);
    } else {
      return 1;
    }
  }

  private largestNumber(numArr): number {
    if (numArr) {
      const tempArr = numArr.map((x) => x.Amount);
      return Math.max.apply(Math, tempArr);
    } else {
      return 1;
    }
  }

  private setLinearAxisMaxMin(outputArr): void {
    const smallest: number = this.smallestNumber(outputArr);
    const largest: number = this.largestNumber(outputArr);

    if (smallest === 0 && largest === 0) {
      this.min = 0.95;
      this.max = 1.1;
    } else {
      // 0.95 & 1.05 to add padding to charts
      this.min = smallest * 0.95;
      this.max = largest * 1.1;
    }
  }

}
