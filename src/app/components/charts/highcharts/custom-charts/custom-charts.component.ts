import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { isIOS, Screen } from '@nativescript/core';
import { AreaChartOptions, CandleStickChartOptions, FinancialAreaChart, ChartLoadOptions } from './highchart-options';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as moment from 'moment';
import { ChartData } from '~/app/shared/interfaces/coin.interface';
import { GetService } from '~/app/services/Get.service';
import { DateTimeUtilitiesProvider } from '~/app/providers/datetime-utilities.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { AreaChartServiceLayerService } from '~/app/services/chart-services/area-chart-service-layer.service';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';

@Component({
    selector: 'app-custom-charts',
    moduleId: module.id,
    templateUrl: './custom-charts.component.html',
    styleUrls: ['./custom-charts.component.scss']
})
export class CustomChartsComponent implements OnChanges, AfterViewInit {
    @Output() toggleSpinner = new EventEmitter();

    @Input() chartName: string;
    @Input() symbolAndRate;

    hasData: boolean = true;
    chartHeight: number;
    chartOptions;

    sampleCount = 100;

    areaSource$: Observable<ChartData[]> = new Observable<ChartData[]>();

    chartService$ = of(JSON.stringify([ChartLoadOptions]));

    name: string;
    portfolioDocs: any;
    portfolioDB;
    enableSampling: boolean;
    rate: number = 1;
    min: number;
    max: number;

    constructor(
        private getDataService: GetService,
        private datetimeUtilities: DateTimeUtilitiesProvider,
        private dataBaseService: DatabaseService,
        private areaChartService: AreaChartServiceLayerService,
        private utilities: UtilitiesProvider
    ) { }

    ngOnChanges({ chartName, symbolAndRate }: SimpleChanges) {
        if (chartName && chartName.currentValue !== null) {
            this.name = chartName.currentValue;
            this.loadChart(this.name, symbolAndRate);
        }
    }

    ngAfterViewInit() { }

    toggleChartSpinner(spin: boolean): void {
        this.toggleSpinner.emit(spin);
    }

    showChart(show: boolean): void {
        this.hasData = show;
    }

    onLoad(args) {
        // this.chartService$ = of(JSON.stringify([AreaChartOptions]));
        // setTimeout(() => {
        //  this.areaChart(args);
        // }, 3000);
    }

    loadChart(chartName: string, symbolAndRate) {
        switch (chartName) {
            case 'candlestick':
                // return CandleStickChartOptions;
                break;
            case 'areachart':
                this.areaChart();
                break;
            case 'financial':
                this.financialChart(symbolAndRate.currentValue);
                break;
            default:
                console.log('Not a value chart name.');
        }
    }

    chartOption(chartType: string) {
        switch (chartType) {
            case 'candlestick':
                return CandleStickChartOptions;
            case 'areachart':
                return AreaChartOptions;
            case 'financial':
                return FinancialAreaChart;
            default:
                console.log('Not a value chart name.');
        }
    }

    private areaChart(): void {
        this.enableSampling = true;
        this.portfolioDB = this.dataBaseService.getDataBase('portfolio');
        this.portfolioDocs = this.utilities.executeDBQuery(this.portfolioDB, 'portfolio');
        const subscriptionArr = this.areaChartService.candleSubscriptionArray(this.portfolioDocs);
        if (subscriptionArr.length > 0) {
            this.chartService$ = this.areaChartService.getHistoricalData(subscriptionArr).pipe(
                map((prices) => prices.map((price) => price['prices'])),
                map((res) => this.areaChartService.calculateTotals(res)),
                map((res) => (this.enableSampling) ? this.areaChartService.sampleData(res, this.sampleCount) : res),
                map((res) => this.areaChartDataFormat(res)),
                tap(() => this.showChart(true)),
                tap(() => this.toggleChartSpinner(true))
            );
        } else {
            this.chartService$ = of(JSON.stringify([AreaChartOptions]));
            this.toggleChartSpinner(true);
            this.showChart(false);
        }
    }

    private areaChartDataFormat(totals): string {
        const obj = this.chartOption(this.name);

        obj['chart'].height = (isIOS) ?
            Screen.mainScreen.heightDIPs * .3 - 80 :
            Screen.mainScreen.heightDIPs * .3 - 85;

        obj['series'] = [{
            data: totals.map((x) => [x.Date, x.Amount]),
            type: 'area'
        }];

        return JSON.stringify(obj);
    }

    private financialChart(symbolAndRate): void {
        this.enableSampling = false;
        this.rate = symbolAndRate.currencyrate;
        const startInterval = this.datetimeUtilities.get30DaysTimeFormat();
        this.chartService$ = this.getDataService
            .getOHLCV(symbolAndRate.symbol, startInterval, '', 30).pipe(
                map((res) => this.addRateToResponse(res['content'].toJSON(), this.rate)),
                map((res) => this.formatFinancialData(res)),
                map((res) => this.financialChartDataFormat(res)),
                tap(() => this.toggleChartSpinner(true))
            );
    }

    private setLinearAxisMaxMin(dataArr): void {
        if (dataArr.length > 0) {
            const first = parseFloat(dataArr[0].Amount);
            const last = parseFloat(dataArr[dataArr.length - 1].Amount);

            let smallest: number = this.smallestNumber(dataArr);
            const smallestArr = [first, last, smallest];
            smallest = Math.min.apply(Math, smallestArr);

            let largest: number = this.largestNumber(dataArr);
            const largestArr = [first, last, largest];
            largest = Math.max.apply(Math, largestArr);

            // 0.95 & 1.05 to add padding to charts
            this.min = smallest * 1;
            this.max = largest * 1;
        }
    }

    private smallestNumber(numArr): number {
        const tempArr = numArr.map((x) => x.Amount);
        return Math.min.apply(Math, tempArr);
    }

    private largestNumber(numArr): number {
        const tempArr = numArr.map((x) => x.Amount);
        return Math.max.apply(Math, tempArr);
    }

    private addRateToResponse(res, rate) {
        for (let i = 0; i < res.length; i++) {
            res[i].close = res[i].close * rate;
        }
        return res;
    }

    private financialChartDataFormat(totals) {
        const obj = this.chartOption(this.name);
        this.setLinearAxisMaxMin(totals);
        obj['chart'].height = 190;
        // set max and min here
        obj['yAxis'].min = this.min;
        obj['yAxis'].max = this.max;

        obj['series'] = [{
            data: totals.map((x) => [x.Date, x.Amount]),
            type: 'area'
        }];
        return JSON.stringify(obj);
    }

    private formatFinancialData(dataArr) {
        if (dataArr.length > 0) {
            return dataArr.map((x) => ({
                Date: moment(x.time_close).format('MM/DD'),
                Amount: x.close
            })
            );
        } else {
            return [];
        }
    }

}
