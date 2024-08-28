import { Injectable } from '@angular/core';
import { LoadingIndicator, Mode } from "@nstudio/nativescript-loading-indicator";
import { localize } from '@nativescript/localize';


@Injectable()
export class LoadingIndicatorProvider {

    loader;

    options = {
        message: localize('@@LoadingIndicatorProvider_Message'),
        progress: 0.65,
        android: {
            details: "",
            margin: 10,
            dimBackground: true,
            color: "#FFFFFF", // color of indicator and labels
            // background box around indicator
            // hideBezel will override this if true
            backgroundColor: "#342c2d",
            userInteractionEnabled: true, // default true. Set false so that the touches will fall through it.
            hideBezel: false, // default false, can hide the surrounding bezel
            // view: android.view.View, // Target view to show on top of (Defaults to entire window)
            mode: Mode.AnnularDeterminate,// see options below
            indeterminate: true,
            cancelable: true,
            cancelListener: function (dialog) { console.log("Loading cancelled") },
        },
        ios: {
            details: "",
            margin: 10,
            dimBackground: true,
            color: "#FFFFFF", // color of indicator and labels
            // background box around indicator is called the bezel
            // hideBezel will override this if true
            backgroundColor: "#342c2d",
            userInteractionEnabled: true, // default true. Set false so that the touches will fall through it.
            hideBezel: false, // default false, can hide the surrounding bezel
            // view: UIView, // Target view to show on top of (Defaults to entire window)
            mode: null// see iOS specific options below
        }
    }

    constructor() {
        this.loader = new LoadingIndicator();
    }

    hideLoader(): void {
        this.loader.hide();
    }

    showLoader(customOptions?: any): void {
        if (customOptions !== undefined) {
            this.loader.show(this.options);
        } else {
            this.loader.show(this.options);
        }
    }

}