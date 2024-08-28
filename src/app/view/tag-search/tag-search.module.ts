import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { TagSearchComponent } from './tag-search.component';

import { TagSearchRoutingModule } from './tag-search-routing.module';

import { ComponentsModule } from './../../components/components.module';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
    imports: [
      ComponentsModule,
      NativeScriptCommonModule,
      TagSearchRoutingModule,
      NativeScriptFormsModule,
      NativeScriptUIListViewModule
    ],
    declarations: [TagSearchComponent],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  })
export class TagSearchModule { }
