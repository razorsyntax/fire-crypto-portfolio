import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptLocalizeModule } from '@nativescript/localize/angular';

import { GetPricesNIntervalsComponent } from './get-prices-n-intervals/get-prices-n-intervals.component';
import { UserPrefsComponent } from './user-prefs/user-prefs.component';

@NgModule({
    declarations: [
        GetPricesNIntervalsComponent,
        UserPrefsComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptLocalizeModule
    ],
    exports: [
        GetPricesNIntervalsComponent,
        UserPrefsComponent,

    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainersModule { }