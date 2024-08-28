import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy, ChangeDetectionStrategy, SimpleChanges, HostListener } from '@angular/core';
import { Page } from '@nativescript/core';
import { Subscription } from 'rxjs';

export interface TabBorder {
  topborder?: string;
  bottomborder?: string;
}

interface Tab {
  charCode?: string;
  charClass?: string;
  tabId: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() tabCharArr: Tab[];
  @Input() tabFontSize: string;
  @Input() borders: TabBorder;
  @Input() setTab: number;
  @Output() tabSelected = new EventEmitter<number>();

  tabIsSelected: string = 'selected';
  tabIsUnselected: string = 'unselected';
  defaultClasses: string = 'center-text';

  numCols: number;
  gridColumns: string;

  selectedTabIndex: number;

  dataService$: Subscription;

  constructor(private page: Page) { }

  ngOnInit() {
    this.numCols = this.tabCharArr.length;
    this.gridColumns = this.generateColAsterisks(this.numCols);
  }

  @HostListener('loaded')
  ngAfterViewInit() {
    this.setTabSelection(this.tabCharArr[0].tabId, 0);
  }

  ngOnChanges({ setTab }: SimpleChanges) {
    if (setTab && setTab.currentValue !== null && setTab.currentValue !== undefined) {
      this.selectedTabIndex = setTab.currentValue;
      this.setTabSelection(this.tabCharArr[setTab.currentValue].tabId, setTab.currentValue);
    }
  }

  ngOnDestroy() {
    if (this.dataService$) {
      this.dataService$.unsubscribe();
    }
  }

  /**
   * Emits the index of the selected tab
   * where zero is the first tab on the left
   *
   * @param selectedTab
   */
  ontabSelection(selectedTab: Tab, index: number): void {
    this.tabSelected.emit(index);
    this.setTabSelection(selectedTab.tabId, index);
  }

  private setTabSelection(tabId: string, index: number) {
    const el = this.page.getViewById(tabId);
    if (tabId && el) {
      
      if (el) {
        el.className = `${this.tabIsSelected} ${this.tabCharArr[index].charClass} ${this.defaultClasses} ${this.tabFontSize}`;

        for (let i = 0; i < this.numCols; i++) {
          if (this.tabCharArr[i].tabId !== tabId) {
            const unselectedEl = this.page.getViewById(this.tabCharArr[i].tabId);
            unselectedEl.className = `${this.tabIsUnselected} ${this.tabCharArr[i].charClass} ${this.defaultClasses} ${this.tabFontSize}`;
          }
        }
      }
    } else {
      // console.log('Nope.');
      // console.log(tabId);
    }

    // this.dataService.updatingData('tabs');
  }

  /**
   *
   * Generates asterisks for grid layout columns
   * @param numCols
   */
  private generateColAsterisks(numCols: number): string {
    const asteriskArr: string[] = [];
    if (numCols > 0) {
      let i = 0;
      while (i < numCols) {
        asteriskArr.push('*');
        i++;
      }
      return asteriskArr.join(',');
    } else {
      return '';
    }
  }

}
