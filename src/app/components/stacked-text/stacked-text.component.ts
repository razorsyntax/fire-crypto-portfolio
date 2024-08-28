import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-stacked-text',
  templateUrl: './stacked-text.component.html',
  styleUrls: ['./stacked-text.component.scss']
})
export class StackedTextComponent implements OnInit {
  @Input() colour: string;
  @Input() topText: string;
  @Input() bottomText: string;
  @Input() topTextClass: string = '';
  @Input() bottomTextClass: string = '';

  constructor() { }

  ngOnInit() {
  }

}
