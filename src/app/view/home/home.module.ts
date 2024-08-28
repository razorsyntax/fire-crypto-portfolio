import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';

// Modules
import { PipesModule } from '~/app/pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { ContainersModule } from '~/app/containers/containers.module';

// Market Cap
import { MarketcapComponent } from './marketcap/marketcap.component';
import { MarketcapListItemComponent } from './marketcap/marketcap-list-item/marketcap-list-item.component';
import { MarketcapHeaderComponent } from './marketcap/marketcap-header/marketcap-header.component';

// Portfolio
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioHeaderComponent } from './portfolio/portfolio-header/portfolio-header.component';
import { WatchlistListComponent } from './portfolio/watchlist-list/watchlist-list.component';
import { WatchlistItemComponent } from './portfolio/watchlist-item/watchlist-item.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';

// Coin Discovery
import { CoinDiscoveryComponent } from './coin-discovery/coin-discovery.component';
import { CoinDiscoveryListItemComponent } from './coin-discovery/coin-discovery-list-item/coin-discovery-list-item.component';

@NgModule({
    imports: [
        PipesModule,
        ComponentsModule,
        ContainersModule,
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CoinDiscoveryComponent,
        HomeComponent,
        MarketcapComponent,
        MarketcapListItemComponent,
        MarketcapHeaderComponent,
        PortfolioComponent,
        PortfolioListComponent,
        PortfolioHeaderComponent,
        PortfolioItemComponent,
        WatchlistListComponent,
        WatchlistItemComponent,
        CoinDiscoveryListItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
