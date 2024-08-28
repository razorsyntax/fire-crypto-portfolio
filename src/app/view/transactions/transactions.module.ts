import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { TransactionsComponent } from "./transactions.component";

import { TransactionsRoutingModule } from "./transactions-routing.module";

import { ComponentsModule } from "./../../components/components.module";

@NgModule({
  imports: [
    ComponentsModule,
    NativeScriptCommonModule,
    TransactionsRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [TransactionsComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TransactionsModule { }