import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { TagSearchComponent } from './tag-search.component';

const routes: Routes = [
  { path: '', component: TagSearchComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TagSearchRoutingModule { }
