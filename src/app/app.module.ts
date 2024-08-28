import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, registerElement, NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { Carousel, CarouselItem } from 'nativescript-carousel';

import { FilterableListpicker } from '@nstudio/nativescript-filterable-listpicker';

// Nativescript ListPicker
registerElement("FilterableListpicker", () => FilterableListpicker);
registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

// Plugins
import * as moment from 'moment';
import { NativeScriptLocalizeModule } from '@nativescript/localize/angular';
import { FilterableListPickerComponent } from './components/filterableListPicker/filterableListPicker.component';
import { WebViewExtModule } from '@nota/nativescript-webview-ext/angular';

// services
import { GetService } from './services/Get.service';
import { DataService } from './services/update-data-service/update-data-service';
import { DatabaseService } from './services/database-service/database.service';
import { MapToFormService } from './services/map-to-form-service/map-to-form.service';
import { ApplicationEventsService } from './services/application-events.service';

// providers
import { DataSamplerProvider } from './providers/data-sampler.provider';
import { DataStorageProvider } from './providers/data-storage.provider';
import { UtilitiesProvider } from './providers/utilities.provider';
import { CoinDataMapperProvider } from './providers/coindata-mapper.provider';
import { NavHistoryProvider } from './providers/nav-history.provider';
import { ApiFixerProvider } from './providers/api-fixer.provider';
import { EncryptionProvider } from './providers/encryption.provider';
import { CacheProvider } from './providers/cache.provider';
import { CoinCalculationsProvider } from './providers/coin-calculations.provider';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';
import { DateTimeUtilitiesProvider } from './providers/datetime-utilities.provider';
import { IntlUtilitiesProvider } from './providers/intl-utilities.provider';
import { ToastProvider } from './providers/toast.provider';
import { CoinIdsProvider } from './providers/coin.ids.provider';
import { LoadingIndicatorProvider } from './providers/loading-indicator.provider';

// nativescript modules

// Services
// import { AppSyncService } from './services/app-sync.service';
import { UserPrefsService } from './services/userprefs.service';
import { ConnectivityService } from './services/connectivity.service';
import { MarketCapServiceLayer } from './view/home/marketcap/marketcap-service-layer.service';
import { AreaChartServiceLayerService } from './services/chart-services/area-chart-service-layer.service';
import { TransactionListServiceLayer } from './components/transaction-list/transaction-list-service-layer.service';
import { PortfolioFieldsServiceLayer } from './view/portfolio-form/portfolio-fields/portfolio-fields-service-layer.service';

// Utilities
import { CoinIdStitcherUtility } from './utilities/coin-id-sticher.utility';

import { HighchartsModule } from '@mhtghn/nativescript-highcharts/angular';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';

const DECLARATIONS = [
  AppComponent,
  FilterableListPickerComponent
];

const PROVIDERS = [
  GetService,
  DataService,
  // AppSyncService,
  DatabaseService,
  UserPrefsService,
  MapToFormService,
  ConnectivityService,
  ApplicationEventsService,
  ToastProvider,
  CacheProvider,
  CoinIdsProvider,
  ApiFixerProvider,
  UtilitiesProvider,
  EncryptionProvider,
  NavHistoryProvider,
  DataSamplerProvider,
  DataStorageProvider,
  IntlUtilitiesProvider,
  CoinDataMapperProvider,
  LoadingIndicatorProvider,
  CoinCalculationsProvider,
  DateTimeUtilitiesProvider,
  CoinIdStitcherUtility,
  ModalDatetimepicker,
  MarketCapServiceLayer,
  PortfolioFieldsServiceLayer,
  TransactionListServiceLayer,
  AreaChartServiceLayerService,
  HighchartsModule,
  { provide: 'moment', useFactory: (): any => moment }
];

const IMPORTS = [
  WebViewExtModule,
  ComponentsModule,
  ContainersModule,
  AppRoutingModule,
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptLocalizeModule,
  NativeScriptHttpClientModule
];

@NgModule({
  bootstrap: [AppComponent],
  imports: IMPORTS,
  declarations: DECLARATIONS,
  entryComponents: [],
  providers: PROVIDERS,
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
