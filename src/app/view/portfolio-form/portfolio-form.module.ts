import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { PortfolioFormComponent } from './portfolio-form.component';

import { PortfolioFormRoutingModule } from './portfolio-form-routing.module';

import { ComponentsModule } from './../../components/components.module';

import { PortfolioFieldsComponent } from './portfolio-fields/portfolio-fields.component';
import { FormHeaderComponent } from './form-header/form-header.component';

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    PortfolioFormRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [
    FormHeaderComponent,
    PortfolioFormComponent,
    PortfolioFieldsComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class PortfolioFormModule { }
