// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
// import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

import 'zone.js'

import * as application from '@nativescript/core/application';
// import { AppSyncService } from './services/app-sync.service';

// const appSyncService: AppSyncService = new AppSyncService();

// uncomment to enable production mode
// enableProdMode();

runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule)

    // 🌟 Amazing new abilities here. 
    // Bootstrapping a module that's not the AppModule!?
    // For the async APP_INITIALIZER users out there, you can now bootstrap a small (synchronous) module to show until your main AppModule is loaded.
    // This allows you to better isolate an entirely encapsulated rich launch experience (which is only experienced once in your app's lifecycle by your users)
    // exampleLoadingModule: (reason: string) => platformNativeScript().bootstrapModule(exampleLoadingModule),
});

application.on(application.resumeEvent, () => {
    // Check for updates when the app is loaded or resumed
    // appSyncService.syncWithAppSyncServer();
});

