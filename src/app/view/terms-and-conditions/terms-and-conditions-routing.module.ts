import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { TermsAndConditionsComponent } from "./terms-and-conditions.component";

const routes: Routes = [
    { path: "", component: TermsAndConditionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TermsAndConditionsRoutingModule { }