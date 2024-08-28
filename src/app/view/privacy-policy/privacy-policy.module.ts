import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { PrivacyPolicyComponent } from "./privacy-policy.component";

import { PrivacyPolicyRoutingModule } from "./privacy-policy-routing.module";

import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    PrivacyPolicyRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [PrivacyPolicyComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PrivacyPolicyModule { }