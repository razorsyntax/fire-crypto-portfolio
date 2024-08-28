import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { LicensesAndAcknowledgementsComponent } from "./licenses-and-acknowledgements.component";

const routes: Routes = [
    { path: "", component: LicensesAndAcknowledgementsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LicensesAndAcknowledgementsRoutingModule { }