import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { ComponentsModule } from '~/app/components/components.module';

import { WebpageViewRoutingModule } from './webpage-view-routing.module';
import { WebpageViewComponent } from './webpage-view.component';

@NgModule({
    imports: [
        ComponentsModule,
        NativeScriptCommonModule,
        WebpageViewRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [WebpageViewComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WebpageViewModule { }
