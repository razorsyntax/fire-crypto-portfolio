import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-description-truncate',
  templateUrl: './description-truncate.component.html',
  styleUrls: ['./description-truncate.component.scss']
})
export class DescriptionTruncateComponent implements OnInit, OnChanges {

  @Input() longString: string = '';

  description: string = '';
  origDescription: string = '';

  showText: 'Show More' | 'Show Less' | '';
  toggleShowText: boolean = false;

  readonly maximumStringLength = 200;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges({ longString }: SimpleChanges) {
    if (longString && longString.currentValue !== null) {
      this.origDescription = longString.currentValue;
      if (!this.needsTruncate(longString.currentValue)) {
        this.description = longString.currentValue;
        this.showText = '';
      } else {
        this.description = this.truncateString(longString.currentValue);
        this.showText = 'Show More';
      }
    }
  }

  toggleDescription(args) {
    if (this.showText === 'Show More') {
      this.description = this.origDescription;
      this.showText = 'Show Less';
    } else {
      this.description = this.truncateString(this.origDescription);
      this.showText = 'Show More';
    }
  }

  private truncateString(descrip: string): string {
    return `${descrip.substring(0, this.maximumStringLength)}...`;
  }

  private needsTruncate(description: string): boolean {
    if (description.length > this.maximumStringLength) {
      return true;
    }
    return false;
  }

}
