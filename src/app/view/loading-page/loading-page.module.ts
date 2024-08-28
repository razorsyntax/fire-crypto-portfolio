import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { LoadingPageComponent } from "./loading-page.component";

import { LoadingPageRoutingModule } from "./loading-page-routing.module";

import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    LoadingPageRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [LoadingPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class LoadingPageModule { }