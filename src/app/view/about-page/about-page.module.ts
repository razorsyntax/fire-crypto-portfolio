import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AboutPageComponent } from "./about-page.component";

import { AboutPageRoutingModule } from "./about-page-routing.module";

import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    AboutPageRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [AboutPageComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AboutPageModule { }