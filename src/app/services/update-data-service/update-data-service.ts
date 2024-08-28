import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService implements OnDestroy {

    private updateDataService = new BehaviorSubject('Update Data');
    currentData = this.updateDataService.asObservable();

    constructor() { }

    updatingData(updateData: string) {
        this.updateDataService.next(updateData);
    }

    ngOnDestroy() {
        if(this.updateDataService) {
            this.updateDataService.unsubscribe();
        }
    }
}
