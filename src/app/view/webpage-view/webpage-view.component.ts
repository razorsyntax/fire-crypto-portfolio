import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-webpage-view',
  templateUrl: './webpage-view.component.html',
  styleUrls: ['./webpage-view.component.scss']
})
export class WebpageViewComponent implements OnInit {

  url: string = '';

  constructor(
    public page: Page,
    private routerExtensions: RouterExtensions,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundColor = '#342c2d';
    this.page.backgroundSpanUnderStatusBar = true;
    this.route.queryParams.subscribe(params => {
      this.url = params['path'];
    });
  }

  navigateBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
