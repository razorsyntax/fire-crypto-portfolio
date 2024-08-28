import { Injectable } from '@angular/core';
import { Toasty } from '@triniwiz/nativescript-toasty';

@Injectable()
export class ToastProvider {

    makeToast(message: string): void {
        const toast = new Toasty({ text: message });
        toast.show();
    }

}