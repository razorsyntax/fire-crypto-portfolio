import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit, OnChanges {
  @Input() chipArr: Array<{text: string; value: string}>;
  @Output() selectedChip: EventEmitter<string> = new EventEmitter<string>();

  chips: {text: string; value: string}[];

  constructor() { }

  ngOnInit() {
  }

  chipSelected(item) {
    this.selectedChip.emit(item);
  }

  ngOnChanges({ chipArr }: SimpleChanges) {
    if (chipArr && chipArr.currentValue) {
      this.chips = chipArr.currentValue;
    }
  }

}
