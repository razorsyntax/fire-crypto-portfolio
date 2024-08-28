import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AbbreviatedNumberPipe } from "./abbreviatednumber.pipe";
import { CustomCurrencyPipe } from "./customCurrency.pipe";
import { CustompercentPipe } from "./custompercent.pipe";
import { PortfolioCurrencyPipe } from "./portfolioCurrency.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AbbreviatedNumberPipe,
        CustomCurrencyPipe,
        CustompercentPipe,
        PortfolioCurrencyPipe
    ],
    exports: [
        AbbreviatedNumberPipe,
        CustomCurrencyPipe,
        CustompercentPipe,
        PortfolioCurrencyPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PipesModule { }