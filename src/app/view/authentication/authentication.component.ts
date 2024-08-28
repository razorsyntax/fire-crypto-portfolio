import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { ToastProvider } from '~/app/providers/toast.provider';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  moduleId: module.id
})
export class AuthenticationComponent implements OnInit {

  hasPin: boolean = false;
  reenterPinText: boolean = true;
  instructionPinText: string = 'Create a 4 digit PIN';

  submitPin: number[] = [];
  checkPin: number[] = [];

  asteriskText: string = '';

  constructor(page: Page, private routerExtensions: RouterExtensions, private toast: ToastProvider) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;
    // load user prefs and check
  }

  ngOnInit() {
  }

  onPinTap(pinKey): void {
    const enteredArr = (this.reenterPinText) ? this.submitPin : this.checkPin;
    this.checkEnterPin(enteredArr, pinKey);
  }

  checkEnterPin(PINArr, pinKey) {
    if (PINArr.length < 4) {
      PINArr.push(pinKey);
      this.addToAsteriskTextText();
      if (PINArr.length === 4) {
        setTimeout(() => {
          this.reenterPin(this.reenterPinText);
          this.reenterPinText = false;
        }, 400);
      }
    }
  }

  addToAsteriskTextText(): void {
    if (this.asteriskText.length < 4) {
      this.asteriskText = this.asteriskText + '*';
    }
  }

  clearPin(): void {
    this.submitPin = [];
  }

  reenterPin(reenterPinText) {
    // check that pin is 4 char
    if (this.submitPin.length === 4 && reenterPinText) {

      this.asteriskText = '';
      this.instructionPinText = 'Reenter Pin';


    } else {
      if (this.doesPINMatch()) {
        this.saveToDB();

        setTimeout(() => {
          this.goBack();
        }, 1000);

      } else {
        this.toast.makeToast('PIN numbers do not match');
        this.resetPinView();
      }

    }
  }

  resetPinView() {
    this.reenterPinText = true;
    this.submitPin = [];
    this.checkPin = [];
    this.asteriskText = '';
    // animate text back
  }

  saveToDB() {
    // create hash from PIN using random number
    // save hash and random number in user prefs
    // Note: then on load of app, user must enter the pin that matches the hash.
    this.toast.makeToast('Your PIN has been successfully created!');
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
  }

  doesPINMatch() {
    const checkArr = (el, i) => {
      return el === this.checkPin[i];
    }
    return (this.submitPin.length == this.checkPin.length) && this.submitPin.every(checkArr);
  }


}
