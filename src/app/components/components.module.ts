import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { GradientBackgroundComponent } from './gradient-background/gradient-background.component';
import { ListPlaceholderComponent } from './list-placeholder/list-placeholder.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StackedTextComponent } from './stacked-text/stacked-text.component';
import { TabsComponent } from './tabs/tabs.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { FinancialChartComponent } from './charts/financial-chart/financial-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { CustomChartsComponent } from './charts/highcharts/custom-charts/custom-charts.component';
import { NativeScriptUIChartModule } from 'nativescript-ui-chart/angular';
import { KeypadComponent } from './keypad/keypad.component';
import { KeypadButtonComponent } from './keypad/keypad-button/keypad-button.component';
import { ChipsComponent } from './chips/chips.component';
import { DescriptionTruncateComponent } from './description-truncate/description-truncate.component';

import { FeedItemComponent } from './feed-item/feed-item.component';
import { NativeScriptLocalizeModule } from '@nativescript/localize/angular';

@NgModule({
    declarations: [
        FeedItemComponent,
        ChipsComponent,
        KeypadComponent,
        KeypadButtonComponent,
        GradientBackgroundComponent,
        ListPlaceholderComponent,
        SpinnerComponent,
        StackedTextComponent,
        TabsComponent,
        TransactionListComponent,
        SimpleDialogComponent,
        FinancialChartComponent,
        AreaChartComponent,
        PieChartComponent,
        CustomChartsComponent,
        DescriptionTruncateComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptLocalizeModule,
        NativeScriptUIChartModule
    ],
    exports: [
        FeedItemComponent,
        ChipsComponent,
        KeypadComponent,
        GradientBackgroundComponent,
        ListPlaceholderComponent,
        SpinnerComponent,
        StackedTextComponent,
        TabsComponent,
        TransactionListComponent,
        SimpleDialogComponent,
        NativeScriptLocalizeModule,
        FinancialChartComponent,
        AreaChartComponent,
        PieChartComponent,
        CustomChartsComponent,
        DescriptionTruncateComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
