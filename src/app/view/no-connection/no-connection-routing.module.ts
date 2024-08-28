import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { NoConnectionPageComponent } from "./no-connection.component";

const routes: Routes = [
    { path: "", component: NoConnectionPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NoConnectionPageRoutingModule { }