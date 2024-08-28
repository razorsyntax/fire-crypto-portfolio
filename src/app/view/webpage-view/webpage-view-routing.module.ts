import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { WebpageViewComponent } from './webpage-view.component';

const routes: Routes = [
    { path: '', component: WebpageViewComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WebpageViewRoutingModule { }
