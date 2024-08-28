import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list-placeholder',
  templateUrl: './list-placeholder.component.html',
  styleUrls: ['./list-placeholder.component.scss']
})
export class ListPlaceholderComponent implements OnInit {

  @Input() iconText: string;
  @Input() placeholderText: string;
  @Input() height: number;

  constructor() { }

  ngOnInit() {
  }

}
