import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { PortfolioFormComponent } from './portfolio-form.component';

const routes: Routes = [
    { path: '', component: PortfolioFormComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PortfolioFormRoutingModule { }
