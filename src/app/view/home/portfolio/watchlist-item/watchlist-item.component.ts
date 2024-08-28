import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-watchlist-item',
  moduleId: module.id,
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.scss']
})
export class WatchlistItemComponent implements OnInit {
  @Input() watchlist;

  constructor() { }

  ngOnInit() {
  }

}
