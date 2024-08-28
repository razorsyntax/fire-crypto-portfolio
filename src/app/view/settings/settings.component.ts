import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Switch, Page, ListPicker } from '@nativescript/core';
import { DatabaseService } from './../../services/database-service/database.service';
// import * as utils from 'tns-core-modules/utils/utils';
import { localize } from '@nativescript/localize';
import { UserPrefs } from '~/app/shared/interfaces/database.interface';
import { ToastProvider } from '~/app/providers/toast.provider';
import { DataService } from '~/app/services/update-data-service/update-data-service';
import { IntlUtilitiesProvider } from '~/app/providers/intl-utilities.provider';
import { UtilitiesProvider } from '~/app/providers/utilities.provider';


export enum URLS {
  TWITTER = '',
  TELEGRAM = ''
}

@Component({
  selector: 'app-settings',
  moduleId: module.id,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('myfilter', { static: false }) myfilter: ElementRef;

  public defaultCurrencies;
  public selectedCurrency: string;
  public authenticationSwitchState = 'OFF';
  public advancedPortfolioState = 'OFF';
  public selectedItem: string;
  public isCurrencyListPickerVisible = false;
  public userpreferencesDB;
  public userPrefs: UserPrefs;

  public defaultCurrencyItems = [];
  public hintText: string = 'Search to Filter...';

  public dialogBodyText: string = localize('@@SettingsComponent_DialogHeaderText');
  public dialogOpen: boolean = false;
  public dialogButtons = [
    {
      buttontext: 'Ok',
      buttonclass: 'primary',
      buttonvisibility: true
    }, {
      buttontext: 'Cancel',
      buttonclass: 'outline',
      buttonvisibility: true
    }
  ];

  public titleText: string = localize('@@SettingsComponent_TitleText');
  public userCurrency: string = 'USD';

  defaultCurrencyText: string = localize('@@SettingsComponent_DefaultCurrencyText');
  enableAuthenticationText: string = localize('@@SettingsComponent_EnableAuthentication');
  resetPortfolioText: string = localize('@@SettingsComponent_ResetPortfolioText');
  acknowledgementsText: string = localize('@@SettingsComponent_Acknowledgements');
  termsAndConditionsText: string = localize('@@SettingsComponent_Terms&Conditions');
  privacyPolicyText: string = localize('@@SettingsComponent_PrivacyPolicy');
  aboutText: string = localize('@@SettingsComponent_About');

  public dataService$;

  constructor(
    page: Page,
    private toast: ToastProvider,
    private routerExtensions: RouterExtensions,
    private userpreferencesDBService: DatabaseService,
    private watchlistDBService: DatabaseService,
    private portfolioDBService: DatabaseService,
    private dataService: DataService,
    private intlUtilities: IntlUtilitiesProvider,
    private utilities: UtilitiesProvider
  ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;

    this.defaultCurrencies = intlUtilities.nationalCurrenciesData;
    this.userpreferencesDB = this.userpreferencesDBService.getDataBase('userprefs');
    this.userPrefs = this.utilities.executeDBQuery(this.userpreferencesDB, 'userprefs');
    this.setUserPrefsOnLoad(this.userPrefs);
  }

  ngOnInit() {
    this.selectedItem = String.fromCharCode(0xeF0D6);
  }

  ngAfterViewInit() { }

  navigate(urls: string): void {
    // utils.openUrl(URLS[urls]);
  }

  closeSettings() {
    this.routerExtensions.navigate(['/home'], {
      transition: {
        name: 'slideRight',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  defaultCurrencySelection(args) {
    this.defaultCurrencyItems = this.intlUtilities.currencies;
    this.showPicker();
  }

  showPicker(): void {
    this.myfilter.nativeElement.show();
  }

  openAboutPage() {
    this.routerExtensions.navigate(['/aboutpage'], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  openPage(link: string) {
    let url: string = '';
    switch (link) {
      case 'aboutpage':
        url = link;
        break;
      case 'termsandconditions':
        url = link;
        break;
      case 'licensesandacknowledgements':
        url = link;
        break;
      case 'privacypolicy':
        url = link;
        break;
      default:
        url = 'home';
        break;
    }
    this.routerExtensions.navigate([`/${url}`], {
      transition: {
        name: 'slideLeft',
        duration: 300,
        curve: 'easeOut'
      }
    });
  }

  selectedIndexChanged(args) {
    const picker = args.object as ListPicker;
    this.selectedCurrency = this.defaultCurrencies[picker.selectedIndex];
    this.selectedItem = this.defaultCurrencies[picker.selectedIndex];
  }

  enableCurrencyPicker(args) {
    // set to true when BETA is finished
    this.isCurrencyListPickerVisible = false;
  }

  toggleAuthentication(args) {

    // Beta Only
    const toggled = args.object as Switch;
    if (toggled.checked) {
      this.authenticationSwitchState = 'OFF;';
      // this.enableAuthentication();
    } else {
      this.authenticationSwitchState = 'OFF;';
    }

    // Enable when beta is over
    // let toggled = <Switch>args.object;
    // if (toggled.checked) {
    //   this.authenticationSwitchState = 'ON;'
    //   this.enableAuthentication();
    // } else {
    //   this.authenticationSwitchState = 'ON;'
    // }
    // this.routerExtensions.navigate(['/createpin']);
  }

  togglePortfolioMode(args) {
    const toggled = args.object as Switch;
    if (toggled.checked) {
      this.advancedPortfolioState = 'ON;';
      this.enableAdvancedPortfolio();
    } else {
      this.advancedPortfolioState = 'ON;';
    }
  }

  closeCurrencyPicker(args) {
    this.isCurrencyListPickerVisible = false;
  }

  saveCurrencyChoice(args) {

    // this.userpreferencesDB.createDocument({
    //   defaultcurrency: args,
    //   type: 'userprefs'
    // });
    this.isCurrencyListPickerVisible = false;

    // show Toast
  }

  enableAuthentication() {

  }

  enableAdvancedPortfolio() {
    // get user refs
    // add 'true' to user prefs object
    // save to user prefs
  }

  dialogButtonEvent(event): void {
    switch (event.buttontext) {
      case 'Ok':
        this.dialogOpen = false;
        this.removeFromPortfolio();
        break;
      case 'Cancel':
        this.dialogOpen = false;
        break;
      default:
        this.dialogOpen = false;
        break;
    }
  }

  resetPortfolio() {
    this.dialogOpen = true;
  }

  private removeFromPortfolio() {
    const watchlistDocs = this.watchlistDBService.getDataBase('watchlist');
    const portfolioDocs = this.portfolioDBService.getDataBase('portfolio');
    watchlistDocs.destroyDatabase();
    portfolioDocs.destroyDatabase();
    this.toast.makeToast('Portfolio has been reset.');
  }

  updateList(dbType) {
    this.dataService$ = this.dataService.updatingData(dbType);
  }

  itemTapped(selectedItem) {
    if (selectedItem) {
      this.userPrefs[0].defaultcurrency = selectedItem.selectedItem;
      this.userpreferencesDB.updateDocument(this.userPrefs[0]._id, this.userPrefs[0]);
      this.userCurrency = selectedItem.selectedItem;
      this.toast.makeToast(`${selectedItem.selectedItem} saved!`);
    }
  }

  setDefaultUserPrefs(): UserPrefs {
    return {
      type: 'userprefs',
      defaultcurrency: 'USD',
      authsettings: {
        userpin: null,
        authenticationenabled: false
      },
      theme: 'default',
      membership: 'free',
      firstrun: true
    };
  }

  setUserPrefsOnLoad(userPrefsDoc) {
    if (userPrefsDoc && userPrefsDoc.length > 0) {
      this.mapToSettingsUI(userPrefsDoc[0]);
    } else {
      this.userpreferencesDB.createDocument(
        this.setDefaultUserPrefs()
      );
    }
  }

  mapToSettingsUI(userPrefsDoc: UserPrefs) {
    this.userCurrency = userPrefsDoc.defaultcurrency;
    this.authenticationSwitchState = (userPrefsDoc.authsettings.authenticationenabled) ? 'ON' : 'OFF';
  }

  cancelFilterableList(args) {
    console.log('canceled');
  }

}
