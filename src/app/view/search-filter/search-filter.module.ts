import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { SearchFilterComponent } from './search-filter.component';

import { SearchFilterRoutingModule } from './search-filter-routing.module';

import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    SearchFilterRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [SearchFilterComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SearchFilterModule { }
