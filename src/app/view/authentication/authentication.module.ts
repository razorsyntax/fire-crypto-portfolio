import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AuthenticationComponent } from "./authentication.component";

import { AuthenticationRoutingModule } from "./authentication-routing.module";

import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    AuthenticationRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [AuthenticationComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AuthenticationModule { }