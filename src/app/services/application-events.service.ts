import { Injectable } from '@angular/core';
import { Application, LaunchEventData, ApplicationEventData, OrientationChangedEventData, UnhandledErrorEventData } from '@nativescript/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationEventsService {

  constructor() { }

  onLaunch() {
    Application.on(Application.launchEvent, (args: LaunchEventData) => {
      if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
      } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
      }
    });
  }

  onSuspend() {
    Application.on(Application.suspendEvent, (args: ApplicationEventData) => {
      if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("suspendEvent - Activity: " + args.android);
      } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("suspendEvent - UIApplication: " + args.ios);
      }
    });
  }

  // onResume() {
  //   applicationOn(resumeEvent, (args: ApplicationEventData) => {
  //     if (args.android) {
  //       // For Android applications, args.android is an android activity class.
  //       console.log("resumeEvent - Activity: " + args.android);
  //     } else if (args.ios) {
  //       // For iOS applications, args.ios is UIApplication.
  //       console.log("resumeEvent - UIApplication: " + args.ios);
  //     }
  //   });
  // }

  onDisplayedEvent() {
    Application.on(Application.displayedEvent, (args: ApplicationEventData) => {
      console.log("displayedEvent: " + args);
    });
  }

  orientationChanged() {
    Application.on(Application.orientationChangedEvent, (args: OrientationChangedEventData) => {
      // "portrait", "landscape", "unknown"
      console.log('orientationChangedEvent: ' + args.newValue)
    });
  }

  onExit() {
    Application.on(Application.exitEvent, (args: ApplicationEventData) => {
      if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("exitEvent - Activity: " + args.android);
      } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("exitEvent - UIApplication: " + args.ios);
      }
    });
  }

  // Application.lowMemoryEvent() {
  //   Application.on(Application.lowMemoryEvent, (args: ApplicationEventData) => {
  //     if (args.android) {
  //       // For Android applications, args.android is an android activity class.
  //       console.log("lowMemoryEvent - Activity: " + args.android);
  //     } else if (args.ios) {
  //       // For iOS applications, args.ios is UIApplication.
  //       console.log("lowMemoryEvent - UIApplication: " + args.ios);
  //     }
  //   });
  // }

  onUncaughtError() {
    Application.on(Application.uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
      console.log("uncaughtErrorEvent - Error: " + args.error);
    });
  }


  fireEvents() {
    this.onLaunch();
    //this.onResume();
    this.onUncaughtError();
    this.onSuspend();
    this.onExit();
  }
}
