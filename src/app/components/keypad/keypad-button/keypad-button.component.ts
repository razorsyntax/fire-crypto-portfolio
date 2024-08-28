import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Page, View, Color } from '@nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'app-keypad-button',
  template: `
    <StackLayout [id]="btnId" (tap)="onButtonPress($event)" class="default-background pin-button">
      <Label [text]="btnValue" textWrap="true" class="font-color pin-button-label h-align-center"></Label>
    </StackLayout>
  `,
  styleUrls: ['./keypad-button.component.scss']
})
export class KeypadButtonComponent implements OnInit {
  @Input() btnId: string = '';
  @Input() btnValue: number;

  @Output() btnPress = new EventEmitter();

  view: View;

  constructor(private page: Page) { }

  ngOnInit() {
  }

  onButtonPress(args): void {
    this.btnPress.emit(this.btnValue);
    this.view = this.page.getViewById<View>(this.btnId);

    const btnPressed = this.view.createAnimation({
      backgroundColor: new Color("#342c2d")
    })

    const btnReset = this.view.createAnimation({
      backgroundColor: new Color("#c4c4c4")
    })

    btnPressed.play()
      .then(()=>btnReset.play());
  }

}
