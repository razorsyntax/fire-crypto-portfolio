import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { CoinDetailsComponent } from './coin-details.component';

import { CoinDetailsRoutingModule } from './coin-details-routing.module';

import { ComponentsModule } from './../../components/components.module';
import { PipesModule } from '~/app/pipes/pipes.module';

import { CoinDetailsPortfolioBoxComponent } from './coin-details-portfolio-box/coin-details-portfolio-box.component';
import { CoinDetailsCryptoDataComponent } from './coin-details-crypto-data/coin-details-crypto-data.component';
import { CoinDetailsBoxComponent } from './coin-details-box/coin-details-box.component';
import { CoinDetailsFeedComponent } from './coin-details-feed/coin-details-feed.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
    imports: [
        ComponentsModule,
        PipesModule,
        NativeScriptCommonModule,
        CoinDetailsRoutingModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CoinDetailsComponent,
        CoinDetailsBoxComponent,
        CoinDetailsFeedComponent,
        CoinDetailsCryptoDataComponent,
        CoinDetailsPortfolioBoxComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoinDetailsModule { }