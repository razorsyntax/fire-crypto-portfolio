import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() toggleSpinner: boolean = false;

  constructor() { }

  ngOnChanges() {
    this.toggleSpinner = (this.toggleSpinner) ? false : true;
  }

  ngOnInit() {
  }

}
