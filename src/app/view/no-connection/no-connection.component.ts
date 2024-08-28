import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-no-connection',
  templateUrl: './no-connection.component.html',
  styleUrls: ['./no-connection.component.scss']
})
export class NoConnectionPageComponent implements OnInit {
  count: number = 15;
  titleText = 'Huh... ';
  timerInterval;

  constructor(private routerExtensions: RouterExtensions, page: Page, ) {
    page.actionBarHidden = true;
    page.backgroundColor = '#342c2d';
    page.backgroundSpanUnderStatusBar = true;
  }

  ngOnInit() {
    this.startTimer();
  }

  tryReload() {
    clearInterval(this.timerInterval);
    this.routerExtensions.navigate(['/home'], { clearHistory: true });
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.count === 0) {
        this.tryReload();
      }
      this.count = (this.count >= 1) ? this.count - 1 : 15;
    }, 1000);
  }

}
