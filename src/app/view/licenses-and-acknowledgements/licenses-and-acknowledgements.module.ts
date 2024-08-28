import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { LicensesAndAcknowledgementsComponent } from "./licenses-and-acknowledgements.component";

import { LicensesAndAcknowledgementsRoutingModule } from "./licenses-and-acknowledgements-routing.module";

import { ComponentsModule } from "./../../components/components.module";
import { SectionComponentComponent } from "./section-component/section-component.component";

@NgModule({
    imports: [
        ComponentsModule,
        NativeScriptCommonModule,
        LicensesAndAcknowledgementsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [LicensesAndAcknowledgementsComponent, SectionComponentComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LicensesAndAcknowledgementsModule { }