import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WelcomeRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [WelcomeComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WelcomeModule { }