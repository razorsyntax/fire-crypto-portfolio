import { Component, OnInit, ContentChild, TemplateRef, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DateTimeUtilitiesProvider } from '~/app/providers/datetime-utilities.provider';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { GetService } from '~/app/services/Get.service';
import { Observable, forkJoin, of, catchError } from 'rxjs';
import { map, tap, retry } from 'rxjs/operators';
import { CacheProvider } from '~/app/providers/cache.provider';
// import { HttpResponse } from '@nativescript/core';
// import { DatabaseService } from '~/services/database-service/database.service';
// import { Couchbase } from 'nativescript-couchbase';
// import { UtilitiesProvider } from '~/providers/utilities.provider';

@Component({
  selector: 'app-get-prices-n-intervals',
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './get-prices-n-intervals.component.html',
  styleUrls: ['./get-prices-n-intervals.component.scss']
})
export class GetPricesNIntervalsComponent implements OnInit, OnChanges {
  @ContentChild(TemplateRef, { static: false }) templateRef: TemplateRef<any>; // Update this to not `any`

  @Input() userprefs;

  pricesAndInterval$: Observable<any>; // Update this to not any
  getService$: GetService;
  dtUtilities: DateTimeUtilitiesProvider;

  // private database: Couchbase;

testOne;
testTwo;
testThree;

  constructor(
    dataService: DataService,
    getService: GetService,
    private cache: CacheProvider,
    // private utilities: UtilitiesProvider,
    datetimeUtilities: DateTimeUtilitiesProvider
    // private portfolioDataBase: DatabaseService
  ) {
    this.getService$ = getService;
    this.dtUtilities = datetimeUtilities;

    this.request([]);

    dataService.currentData.subscribe((data) => {
      if (data === 'UpdatePrices') {
        this.request(this.userprefs);
      }
    });
  }

  ngOnChanges({ userprefs }: SimpleChanges) {
    if (userprefs && userprefs.currentValue) {
      this.getDataRequest(userprefs.currentValue);
    }
  }

  async getDataRequest(userprefs) {
    let hasCache = false;
    const cachedIntervals: any[] = this.cache.getMultipleItemsFromCache(['global', 'tickers', 'exchangeRates']);
    for (let i = 0; i < cachedIntervals.length; i++) {
      if (cachedIntervals[i] !== null) {
        hasCache = true;
      } else {
        hasCache = false;
        break;
      }
    }
    if (hasCache) {
      cachedIntervals.push(userprefs);
      this.pricesAndInterval$ = of(cachedIntervals);
    } else {
      this.request(userprefs);
    }

  }

  request(userprefs) {
    const requests = [
      this.getService$.getGlobal(),
      this.getService$.getTickers(),
      this.getService$.getExchangeRates()
    ];
    // Adding User prefs so we have access to it
    this.pricesAndInterval$ = forkJoin(requests).pipe(
      retry(3),
      catchError((err) => {
        console.log('---- Catch Error ----');
        console.log(JSON.stringify(err));
        console.log('STUFF FAILED!!!');
        return err;
      }),
      map((res: any) => {
        const formatted = this.formatValues(res);
        formatted.push(userprefs);
        return formatted;
      }),
      tap((res) => this.setCache(res))
    );
  }

  setCache(req) {
    this.cache.setCache(req[0], 'global');
    this.cache.setCache(req[1], 'tickers');
    this.cache.setCache(req[2], 'exchangeRates');
    return req;
  }

  formatValues(res) {
    const formattedArr = [];
    for (let i = 0; i < res.length; i++) {
      const el = res[i];
      formattedArr.push(el.content.toJSON());
    }
    return formattedArr;
  }

  // setSnapShotDB(req) {
  //   this.database = this.portfolioDataBase.getDataBase('snapshot');
  //   let snapShotDocs = this.utilities.executeDBQuery(this.database, 'snapshot');
  //   if (snapShotDocs.length > 1) {
  //     snapShotDocs = snapShotDocs[0];
  //   }

  //   // get id
  //   // use id to update
  //   this.database.createDocument({
  //     reuqests: req,
  //     type: 'snapshot'
  //   });
  // }

  // getSnapShotDB() {
  //   const coinList = this.utilities.executeDBQuery(this.database, 'snapshot');
  // }

  ngOnInit() { }

}
