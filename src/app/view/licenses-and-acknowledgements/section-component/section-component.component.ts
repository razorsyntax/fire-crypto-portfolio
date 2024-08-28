import { Component, Input, OnInit } from '@angular/core';
import { SectionItems } from './../section.interface';
// import * as utils from 'tns-core-modules/utils/utils';

@Component({
  moduleId: module.id,
  selector: 'app-section-component',
  templateUrl: './section-component.component.html',
  styleUrls: ['./section-component.component.scss']
})
export class SectionComponentComponent implements OnInit {

  @Input() subSectionItems: SectionItems;

  constructor() { }

  ngOnInit() {
    if (this.subSectionItems) {
      // debugger;
    }
  }

  navigateToWebpage(url: string): void {
    // utils.openUrl(url);
  }

}
