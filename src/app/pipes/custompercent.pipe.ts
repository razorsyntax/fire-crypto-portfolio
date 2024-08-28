import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompercent'
})
export class CustompercentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !== null && typeof value === 'number' && !isNaN(value)) {
      return `${value.toFixed(2)}%`
    } else {
      return '--'
    }
  }

}
