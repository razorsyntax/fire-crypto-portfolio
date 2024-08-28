import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { SettingsComponent } from './settings.component';

import { SettingsRoutingModule } from './settings-routing.module';

import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    SettingsRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [SettingsComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SettingsModule { }
