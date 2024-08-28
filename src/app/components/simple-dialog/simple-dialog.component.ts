import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface DialogButtonProperties {
  buttontext: string;
  buttonclass: string;
  buttonvisibility: boolean;
}

@Component({
  moduleId: module.id,
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleDialogComponent implements OnInit {
  @Input() buttons: DialogButtonProperties[];
  @Input() toggleDialog: boolean = false;
  @Output() buttonEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnEvent(btn): void {
    this.buttonEvent.emit(btn);
  }

}
