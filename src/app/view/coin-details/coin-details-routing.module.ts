import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { CoinDetailsComponent } from "./coin-details.component";

const routes: Routes = [
    { path: "", component: CoinDetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoinDetailsRoutingModule { }