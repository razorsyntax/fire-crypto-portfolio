// import { Injectable } from '@angular/core';

// import { AppSync, InstallMode, SyncStatus } from 'nativescript-app-sync';

// import { isIOS } from '@nativescript/core';
// import { localize } from '@nativescript/localize';

// @Injectable()
// export class AppSyncService {

//     // private static APPSYNC_IOS_STAGING_KEY = '';
//     private static APPSYNC_IOS_PRODUCTION_KEY = '';

//     // private static APPSYNC_ANDROID_STAGING_KEY = '';
//     private static APPSYNC_ANDROID_PRODUCTION_KEY = '';

//     syncOptions = {
//         deploymentKey: isIOS ? AppSyncService.APPSYNC_IOS_PRODUCTION_KEY : AppSyncService.APPSYNC_ANDROID_PRODUCTION_KEY,
//         installMode: InstallMode.ON_NEXT_RESTART, // default InstallMode.ON_NEXT_RESTART
//         mandatoryInstallMode: isIOS ? InstallMode.ON_NEXT_RESUME : InstallMode.IMMEDIATE, // default InstallMode.ON_NEXT_RESUME
//         updateDialog: { // only used for InstallMode.IMMEDIATE
//             optionalUpdateMessage: localize('@@AppSync_OptionalUpdateMessage'),
//             updateTitle: localize('@@AppSync_UpdateTitle'),
//             mandatoryUpdateMessage: localize('@@AppSync_MandatoryUpdateMessage'),
//             optionalIgnoreButtonLabel: localize('@@AppSync_OptionalIgnoreButtonLabel'),
//             mandatoryContinueButtonLabel: isIOS ? localize('@@AppSync_MandatoryContinueButtonLabel_iOS') : localize('@@AppSync_MandatoryContinueButtonLabel_Android'),
//             appendReleaseDescription: true // appends the description you (optionally) provided when releasing a new version to AppSync
//         }
//     };

//     constructor() { }

//     syncWithAppSyncServer(): void {
//         console.log('Querying AppSync...');
//         AppSync.sync(this.syncOptions, (syncStatus: SyncStatus): void => {
//             if (syncStatus === SyncStatus.UP_TO_DATE) {
//                 console.log('AppSync: up to date.');
//             } else if (syncStatus === SyncStatus.UPDATE_INSTALLED) {
//                 console.log('AppSync: update installed.');
//             }
//         });
//     }
// }
