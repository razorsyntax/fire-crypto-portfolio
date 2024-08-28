import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'abbreviatenumber'
})
export class AbbreviatedNumberPipe extends CurrencyPipe {

    transform(value: any, symbol?): any {
        if(isNaN(value)) {
            return '--';
        }
        let acr = null;
        let fractionSize = '0.0-0';//decimals for abbreviated numbers
        if (Math.abs(value) > 1000000000000000) {
            acr = 'Q';
            value /= 1000000000000000;
            fractionSize = '0.2-2';
        } else if (Math.abs(value) > 1000000000000) {
            acr = 'T';
            value /= 1000000000000;
            fractionSize = '0.2-2';
        } else if (Math.abs(value) > 1000000000) {
            acr = 'B';
            value /= 1000000000;
            fractionSize = '0.2-2';
        } else if (Math.abs(value) > 1000000) {
            acr = 'M';
            value /= 1000000;
        } else if (Math.abs(value) > 1000) {
            acr = 'k';
            value /= 1000;
        } else if (Math.abs(value) > 100) {
            fractionSize = '0.2-2';
        }
        let formatedByCurrencyPipe = super.transform(value, symbol, 'symbol', fractionSize);
        let formatedByMe = acr ? formatedByCurrencyPipe.replace(/([\d\.\,]*)/, '$1') + acr : formatedByCurrencyPipe;
        return formatedByMe;
    }
}