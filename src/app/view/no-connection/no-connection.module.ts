import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { NoConnectionPageComponent } from './no-connection.component';

import { NoConnectionPageRoutingModule } from './no-connection-routing.module';

import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    NoConnectionPageRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [NoConnectionPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class NoConnectionPageModule { }
