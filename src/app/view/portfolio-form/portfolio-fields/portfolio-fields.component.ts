import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UtilitiesProvider } from './../../../providers/utilities.provider';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
// import { ConnectivityService } from '~/services/connectivity.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { PortfolioFieldsServiceLayer } from './portfolio-fields-service-layer.service';
import * as _ from 'lodash';
import { localize } from '@nativescript/localize';
import { CoinForm, CoinFormTypes } from '~/app/shared/interfaces/coin.interface';
import { TabBorder } from '~/app/components/tabs/tabs.component';
import { CacheProvider } from '~/app/providers/cache.provider';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { DateTimeUtilitiesProvider } from '~/app/providers/datetime-utilities.provider';

/**
 * Official docs for using forms.
 * https://docs.nativescript.org/angular/ui/professional-ui-components/ng-DataForm/GettingStarted/dataform-start-source
 */

@Component({
  moduleId: module.id,
  selector: 'app-portfolio-fields',
  templateUrl: './portfolio-fields.component.html',
  styleUrls: ['./portfolio-fields.component.scss']
})
export class PortfolioFieldsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() public obtainedTextField: string;
  @Input() public exchangeTextField: string;
  @Input() public tradingPairTextField: string;
  @Input() public transferToTextField: string;
  @Input() public transferFromTextField: string;
  @Output() public optionSelected = new EventEmitter<CoinFormTypes>();
  @Output() public tabSelected = new EventEmitter<0 | 1 | 2>();
  @Output() public data = new EventEmitter<CoinForm>();

  public isValid: boolean;
  public validationMessage: string;
  public transactionTab: string;
  public transferTabSelected: boolean = false;

  public amountHintText: string = localize('@@PortfolioFieldsComponent_Amount');

  public tabs = [{
    charCode: localize('@@PortfolioFieldsComponent_Buy'),
    charClass: '',
    tabId: 'buyTab'
  }, {
    charCode: localize('@@PortfolioFieldsComponent_Transfer'),
    charClass: '',
    tabId: 'transferTab'
  }, {
    charCode: localize('@@PortfolioFieldsComponent_Sell'),
    charClass: '',
    tabId: 'sellTab'
  }];

  public tabBorders: TabBorder = {
    topborder: '#342c2d',
    bottomborder: '#c4c4c4'
  };

  readonly advancedOptional: string = localize('@@PortfolioFieldsComponent_AdvancedOptional');
  readonly closeAdvanced: string = localize('@@PortfolioFieldsComponent_CloseAdvanced');
  readonly obtained: string = localize('@@PortfolioFieldsComponent_ObtainedHint');
  readonly exchange: string = localize('@@PortfolioFieldsComponent_ExchangeHint');
  readonly tradingPair: string = localize('@@PortfolioFieldsComponent_TradingPairHint');

  public dateAddedText: string = '';
  public timeAddedText: string = '';
  public amountText: string | number;

  // list of exchanges
  public exchangeItems: string[];
  // unedited list of all exchanges and trading pairs
  public exchanges;
  // list of trading pairs for the selected
  public tradingPairItems;

  public transactionId: string;

  public exchangeCache: any;

  public showExchangeAndTradingPairForms: boolean = true;

  public formModel: CoinForm = {};

  public showAdvancedText: string = this.advancedOptional;

  public showAdvancedForm: boolean = false;

  readonly selectedColor: string = '#ffffff';
  readonly unselectedColor: string = '#515151';

  readonly selectedClass: string = 'selected';
  readonly unselectedClass: string = 'unselected';

  public obtainedClass: string = this.unselectedClass;
  public exchangeClass: string = this.unselectedClass;
  public tradingPairClass: string = this.unselectedClass;
  public transferToClass: string = this.unselectedClass;
  public transferFromClass: string = this.unselectedClass;

  public datePickerColor: string = this.selectedColor;
  public timePickerColor: string = this.unselectedColor;

  public setSelectedTab: number;

  public getexchangeData$: Subscription;

  public dataService$: Subscription;

  constructor(
    private formCache: CacheProvider,
    private dataService: DataService,
    private utilities: UtilitiesProvider,
    private cache: CacheProvider,
    // private connectivity: ConnectivityService,
    private dateTimeUtilities: DateTimeUtilitiesProvider,
    private portfolioServiceLayer: PortfolioFieldsServiceLayer) {
    this.exchangeCache = this.cache;
    this.dataService$ = this.dataService.currentData.subscribe((data) => this.setInitialCacheState(data));
  }

  ngOnInit() {
    this.portfolioServiceLayer.exchangeField.subscribe(isEnabled => this.showExchangeAndTradingPairForms = isEnabled);
  }

  ngOnDestroy() {
    if (this.dataService$) {
      this.dataService$.unsubscribe();
    }
    if (this.getexchangeData$) {
      this.getexchangeData$.unsubscribe();
    }
  }

  ngOnChanges({ obtainedTextField, exchangeTextField, tradingPairTextField, transferToTextField, transferFromTextField }: SimpleChanges) {
    if (obtainedTextField && obtainedTextField.currentValue !== null) {
      this.updateFormModel('obtained', ((obtainedTextField.currentValue !== this.obtained) ? obtainedTextField.currentValue : ''));
      this.showAdvancedForm = (obtainedTextField.currentValue === this.obtained) ? false : true;
      if (this.showAdvancedForm) {
        this.showAdvancedTextBtn();
      }
      this.obtainedClass = (obtainedTextField.currentValue !== this.obtained) ? this.selectedClass : this.unselectedClass;
    }
    if (exchangeTextField && exchangeTextField.currentValue !== null) {
      this.updateFormModel('exchange', ((exchangeTextField.currentValue !== this.exchange) ? exchangeTextField.currentValue : ''));
      this.exchangeClass = (exchangeTextField.currentValue !== this.exchange) ? this.selectedClass : this.unselectedClass;
    }

    if (tradingPairTextField && tradingPairTextField.currentValue !== null) {
      this.updateFormModel('tradingpair', ((tradingPairTextField.currentValue !== this.tradingPair) ? tradingPairTextField.currentValue : ''));
      this.tradingPairClass = (tradingPairTextField.currentValue !== this.tradingPair) ? this.selectedClass : this.unselectedClass;
    }

    if (transferToTextField && transferToTextField.currentValue !== null) {
      this.updateFormModel('transferredTo', ((transferToTextField.currentValue !== 'transfer to') ? transferToTextField.currentValue : ''));
      this.transferToClass = (transferToTextField.currentValue !== 'transfer to') ? this.selectedClass : this.unselectedClass;
    }

    if (transferFromTextField && transferFromTextField.currentValue !== null) {
      this.updateFormModel('transferredFrom', ((transferFromTextField.currentValue !== 'transfer from') ? transferFromTextField.currentValue : ''));
      this.transferFromClass = (transferFromTextField.currentValue !== 'transfer from') ? this.selectedClass : this.unselectedClass;
    }
    this.cache.setCache(this.formModel, 'formData');
  }

  public updateFormModel(modelType: CoinFormTypes, value): void {
    this.formModel[modelType] = value as never;
  }

  public setInitialCacheState(transactionType: string): void {
    switch (transactionType) {
      case 'portfolio-form-new':
        this.getCacheAndSet('new');
        break;
      case 'portfolio-form-edit':
        this.getCacheAndSet('edit');
        break;
      default:
        console.log('Loving the cache');
        break;
    }
  }

  public advancedOption(option): void {
    this.optionSelected.emit(option);
  }

  public clearValidation(): void {
    this.isValid = true;
    this.validationMessage = '';
  }

  public tabWasSelected(selectedTab: number): void {
    if (selectedTab !== undefined && (typeof selectedTab === 'number')) {
      const modelType: CoinFormTypes = 'buyselltransfer';
      let modelValue: string = '';
      let isTransferTab: boolean = false;
      switch (selectedTab) {
        case 0:
          modelValue = 'buy';
          this.tabSelected.emit(0);
          break;
        case 1:
          isTransferTab = true;
          modelValue = 'transfer';
          this.tabSelected.emit(1);
          break;
        case 2:
          modelValue = 'sell';
          this.tabSelected.emit(2);
          break;
      }
      this.transferTabSelected = isTransferTab;
      this.transactionTab = modelType;
      this.updateFormModel(modelType, modelValue);
      this.cache.setCache(this.formModel, 'formData');
    }
  }

  // // Used to ensure tab loads all elements. TODO: refactor this race condition
  private setTabTimeOut(selectedTab: number): void {
    setTimeout(() => {
      this.setSelectedTab = selectedTab;
    }, 10);
  }

  /**
   *
   * @param transactionType 'edit' or 'new' are the only valid options
   */
  private getCacheAndSet(transactionType: 'new' | 'edit'): void {
    const cachedCoinData: CoinForm = this.formCache.getCache('formData');
    if (cachedCoinData) {
      this.formModel = cachedCoinData;
      this.formUpdate(this.formModel, transactionType);
    }
  }

  /**
   * Sets the forms fields
   * @param fieldObj
   */
  formUpdate(fieldObj: CoinForm, transactionType?: 'new' | 'edit'): void {
    switch (transactionType) {
      case 'new':
        this.newTransaction();
        break;
      case 'edit':
        this.editTransaction(fieldObj);
        break;
      default:
        console.log('formUpdate shouldn\'t display this.');
        break;
    }
  }

  /**
   * Sets color of Date Time Icons
   * @param dtType
   */
  private setDateTimeSelectionColor(dtType: 'datepicker' | 'timepicker'): void {
    this.datePickerColor = (dtType === 'datepicker') ? this.selectedColor : this.unselectedColor;
    this.timePickerColor = (dtType === 'timepicker') ? this.selectedColor : this.unselectedColor;
  }

  private editTransaction(fieldObj: CoinForm): void {
    let selectedTab: number = 0;
    this.amountText = (fieldObj.amount !== undefined) ? fieldObj.amount : '';
    this.updateFormModel('transactionid', fieldObj.transactionid);
    switch (fieldObj.buyselltransfer) {
      case 'buy':
        selectedTab = 0;
        break;
      case 'transfer':
        selectedTab = 1;
        this.transferTabSelected = true;
        break;
      case 'sell':
        selectedTab = 2;
        if (fieldObj.obtained !== '') {
          this.setObtained(fieldObj);
        }
        break;
      default:
        break;
    }
    this.dateAddedText = fieldObj.dateadded;
    this.timeAddedText = fieldObj.timeadded;
    this.setTabTimeOut(selectedTab);
  }

  private newTransaction(): void {
    this.amountText = '';
    this.updateFormModel('transactionid', this.utilities.UUID());
    this.dateAddedText = moment().format('MM-DD-YYYY');
    this.timeAddedText = moment().format('hh:mm A');
    this.showAdvancedText = this.advancedOptional;
    this.showAdvancedForm = false;
    this.setDateTimeCache();
  }

  private setDateTimeCache(): void {
    this.updateFormModel('dateadded', this.dateAddedText);
    this.updateFormModel('timeadded', this.timeAddedText);
    const dateTime = this.dateTimeUtilities.dateTimeFormat(this.dateAddedText, this.timeAddedText);
    this.updateFormModel('datetime', dateTime);
    this.formCache.setCache(this.formModel, 'formData');
  }

  private setObtained(transaction): void {
    switch (transaction.buyselltransfer) {
      case 'buy':
        this.obtainedTextField = transaction.obtained;
        break;
      case 'sell':
        // this.setLocationIndexForm(transaction);
        break;
    }
  }

  /**
   * DOM EVENT: Toggles optional advanced forms
   */
  public toggleAdvanced(): void {
    if (this.showAdvancedForm) {
      this.showAdvancedForm = false;
      this.showAdvancedText = this.advancedOptional;
    } else {
      this.showAdvancedForm = true;
      this.showAdvancedTextBtn();
    }
  }

  public showAdvancedTextBtn(): void {
    this.showAdvancedText = this.closeAdvanced;
  }

  /**
   * DOM EVENT
   * @param text string
   */
  public onTextChange(text): void {
    this.updateFormModel('amount', parseFloat(text.value));
    this.formCache.setCache(this.formModel, 'formData');
  }

  /**
   * DOM EVENT
   */
  public pickDate(): void {
    this.setDateTimeSelectionColor('datepicker');
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      title: 'Date',
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      if (result) {
        this.dateAddedText = this.portfolioServiceLayer.formatDate(result);
        this.setDateTimeCache();
      }
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  /**
   * DOM EVENT
   */
  public pickTime(): void {
    this.setDateTimeSelectionColor('timepicker');
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickTime({
      title: 'Time',
      theme: 'dark'
    }).then(result => {
      if (result) {
        this.timeAddedText = this.portfolioServiceLayer.formatTime(result);
        this.setDateTimeCache();
      }
    })
      .catch(error => {
        console.log('Error: ' + error);
      });
  }
}
