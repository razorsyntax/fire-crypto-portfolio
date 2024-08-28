import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'customcurrency'
})
export class CustomCurrencyPipe extends CurrencyPipe {

    transform(value: any, symbol?): any {
        if(isNaN(value)){
            return '--'
        }
        let acr = null;
        let fractionSize = '0.0-0'; // * decimals for abbreviated numbers

        if (Math.abs(value) > 1) {
            fractionSize = '1.2-2';
        } else if (Math.abs(value) === 1) {
            fractionSize = '1.2-2';
        } else if (Math.abs(value) < 1) {
            fractionSize = '1.2-8';
        }
        let formatedByCurrencyPipe = super.transform(value, symbol, 'symbol', fractionSize);
        let formatedByMe = acr ? formatedByCurrencyPipe.replace(/([\d\.\,]*)/, '$1') : formatedByCurrencyPipe;
        return formatedByMe;
    }
}