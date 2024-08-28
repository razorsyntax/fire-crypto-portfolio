import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-marketcap-list-item',
  templateUrl: './marketcap-list-item.component.html',
  styleUrls: ['./marketcap-list-item.component.scss']
})
export class MarketcapListItemComponent implements OnInit {

  @Input() public listItem;
  @Input() public defaultUserCurrency: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

}
