import { Component } from '@angular/core';
import * as application from '@nativescript/core/application';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    // prevents back button from being pressed on Android
    if (application.android) {
      application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
        args.cancel = true;
      });
    }
  }

}
