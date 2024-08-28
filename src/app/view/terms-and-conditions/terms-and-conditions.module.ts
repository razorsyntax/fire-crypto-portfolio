import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { TermsAndConditionsComponent } from "./terms-and-conditions.component";

import { TermsAndConditionsRoutingModule } from "./terms-and-conditions-routing.module";
import { ComponentsModule } from "~/app/components/components.module";


@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    TermsAndConditionsRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [TermsAndConditionsComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TermsAndConditionsPageModule { }