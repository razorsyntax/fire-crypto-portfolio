import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filterable-listpicker',
  moduleId: module.id,
  templateUrl: './filterableListPicker.component.html',
  styleUrls: ['./filterableListPicker.component.scss']
})
export class FilterableListPickerComponent implements OnInit, OnChanges {
  @ViewChild('myfilter', { static: false }) myfilter: ElementRef;

  @Input() fieldText: string;
  @Input() listItems: any[];
  @Input() isEnabled: boolean;

  @Output() selectedItem = new EventEmitter<any>();

  items: any[];
  hintText: string = 'Type to filter...';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges({ listItems }: SimpleChanges) {
    if (listItems.currentValue !== null) {
      this.setItems(listItems.currentValue);
    }
  }

  setItems(list: any) {
    this.items = list.map(x => ({ 'title': x }));
  }

  itemTapped(selected) {
    this.selectedItem.emit(selected);
  }

  cancelFilterableList() {
    console.log('canceled');
  }

  showPicker() {
    this.myfilter.nativeElement.show();
  }

}
