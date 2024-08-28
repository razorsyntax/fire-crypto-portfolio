import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservableArray } from '@nativescript/core';
import { ApiFixerProvider } from '~/app/providers/api-fixer.provider';
import { DatabaseService } from '~/app/services/database-service/database.service';
import { UtilitiesProvider } from './../../../providers/utilities.provider';

@Component({
  selector: 'app-piechart',
  moduleId: module.id,
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnDestroy {
  pieSource;
  portfolioDB;
  isVisible;
  getPrices$;

  constructor(
    private dataBaseService: DatabaseService,
    private utilities: UtilitiesProvider,
    private apiFixer: ApiFixerProvider) {
    this.portfolioDB = this.dataBaseService.getDataBase('portfolio');
  }

  ngOnInit() {
    this.setTotal();
  }

  setTotal() {
    const docs = this.utilities.executeDBQuery(this.portfolioDB, 'portfolio');
    const symbolArr = this.utilities.createSymbolArr(docs);
    this.getCoinPrices(symbolArr, docs);
  }

  // getPortfolioItemsFromCoinList(docs, coinList) {
  //   const coins = [];
  //   for (let i = 0; i < docs.length; i++) {
  //     coins.push(coinList[0].coinList[docs[i].data.symbol]);
  //   }
  //   return coins;
  // }

  getCoinPrices(symbolArr, docs) {
    if (symbolArr && symbolArr.length) {
      // this.getPrices$ = this.getPrices.getMultipleCryptoComparePricesJustPrice(symbolArr).subscribe((data) => {
      //   this.calculateTotal(data, docs);
      // });
    }

  }

  calculateTotal(data, docs) {
    let obj = {};
    const pieArr = [];
    let apiSymbol;
    for (let i = 0; i < docs.length; i++) {
      apiSymbol = this.apiFixer.getApiSymbol(docs[i].data.symbol);
      if(parseFloat(docs[i].data.amount) >= 0) {
        obj = {
        coin: docs[i].data.coin,
        Symbol: docs[i].data.symbol,
        Amount: this.trimPrice((parseFloat(docs[i].data.amount) * data[apiSymbol].USD))
      };
      pieArr.push(obj);
      }
      
    }
    if (pieArr.length > 0) {
      this.isVisible = true;
      this.pieSource = new ObservableArray(pieArr);
    } else {
      this.isVisible = false;
    }
  }

  trimPrice(price) {
    if (price >= 1) {
      price = parseFloat(price.toFixed(2));
    } else {
      price = parseFloat(price.toFixed(8));
    }
    return price;
  }

  ngOnDestroy() {
    if(this.getPrices$) {
      this.getPrices$.unsubscribe();
    }
  }
}
