import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/**
 * Custom UI Authentication screen for signing into Fire using a pin number
 */

@Component({
  moduleId: module.id,
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss']
})
export class KeypadComponent implements OnInit {
  @Output() buttonPress = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  btnPressed(btnKey) {
    this.buttonPress.emit(btnKey);
  }

}
