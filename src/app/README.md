# Fire Portfolio

## Installation Instructions

Note: Do not install Yarn Package Manager.  This causes more headaches than it's worth. Nativescript doesn't recommend it either.

### **Getting Started**

#### Installing the Software
This will help install NativeScript with Angular 6.

You can read the official [NativeScript Quick Setup Guide Here](https://docs.nativescript.org/start/quick-setup) or follow the setup instructions below.

1) Run `npm install` (v6.4.1 or better) in the root directory of the project
2) Run `npm install -g nativescript` to ensure you have/get NativeScript CLI (Command Line Tools) installed globally
3) Check that the CLI is installed by typing `tns` in the command line.
4) Run `npm install -g @angular/cli` to install the Angular CLI globally.

#### Installing the Platforms
-Android: Android Studio (setting up emulator)
-iOS: Setting up Simulator

Once those are completed...

To build and use the different mobile platforms:

(Replace `<platform>` below with either `ios` or `android`)

* Run `tns platform add <platform>` to add your platform
* Run `tns platform remove <platform>` to remove the platform

## Running

### Run with Debug
* `ns debug ios --inspector`



## Upgrade instructions

If you have to upgrade package.json... Don't.  Stop right there.  Don't do it.

If you're still here and absolutely have to do this... create a new branch first.

Steps that seems to work:
1) Run `rm -rf node_modules platforms hooks` to remove node_modules, platforms, and the hooks folder

2) Go to [Nativescript Upgrade site](https://docs.nativescript.org/releases/upgrade-instructions#upgrading-the-application)



## Run Builds

### Local Dev Build
* Run `tns debug <platform>` to start a debug session.
* Run `tns run <platform> --bundle --env.uglify --env.aot --env.snapshot` to run locally to a connected device (as in, when a phone is connected to your machine).

### Release Build

### Android

1) Update the AndroidManifest.xml before building:
* android:versionCode="{next increment}"
* android:versionName="{next increment}"

2) Change Nativescript Id in package.json for Andoid to: `com.{whateverthis}.{is}`

3) Also Enable Angular Production Mode in `main.ts`

4) Run `tns prepare android`

5) Run `tns build android --bundle --release --key-store-path ~/keystores/android.jks --key-store-password <password> --key-store-alias key0 --key-store-alias-password <password>`

##### Alternative Prod Build

`tns build android --release --key-store-path ~/keystores/android.jks --key-store-password <your-key-store-password> --key-store-alias key0 --key-store-alias-password <your-alias-password> --aab --copy-to <aab-location>.aab`

### iOS
Bundle ID: `com.{whateverthis}.{is}`

NOTE: Be sure to change package.json Nativescript Id to: `com.{whateverthis}.{is}`

1) Update version number in Info.plist under `CFBundleShortVersionString` & `CFBundleVersion`

2) Run for release: `tns prepare ios --release`;

3) Run `tns build ios --bundle --env.development --env.uglify --env.aot`

4) Run `tns publish ios <my-apple-id> <my-password> <Mobile Provisioning Profile Identifier> "Fire Distribution" --appleSpecificApplicationPassword <application-specific-password> --provision <provision UUID>`
    • Note: `appleSpecificApplicationPassword` is used to enable 2FA authentication in the console.
    String found here: "Fire Crypto Portfolio Distribution Process" in Standard Notes


## Internationalization



#### Switching Language for Testing


#### *Option 1)* Change the language settings in the target platform.

On iOS go to `Settings > General > Language & Region > iPhone Language`



#### *Option 2)* Rename the default language file.

a) Take the main default file and change it like this: `en.default.json` --> `ru.json`

b) Then take the file you want to change the language to and change it like this: `es.json` --> `es.default.json`

c) Run: `tns platform remove <android/ios> && tns platform add <android/ios>`


## APP SYNC

[App Sync Plugin](https://github.com/EddyVerbruggen/nativescript-app-sync/tree/32aa1f15cc93738f5920e5a871fa3366e3b96a2e)

### iOS

* **Use XCode from here on**
1) Open the file `fireportfolio.xcworkspace` for XCode and change the versions and address any errors.
2) Run a Build for Provisioning (Make sure device is set to a Generic one)
    - Deal with errors if any
3) Go to Build > Archive
    -This will walk you through creating an archive and then uploading to app store.


* **deploy to Staging:** `nativescript-app-sync release <c-ios-appname> ios`
* **deploy to Production (default: Staging):** `nativescript-app-sync release <AppSync-ios-appname> ios --d Production`
* **release to users running any 1.x version (default: the exact version in Info.plist):** `nativescript-app-sync release <AppSync-ios-appname> ios --targetBinaryVersion ~1.0.0`
* **a release for iOS that needs to be applied ASAP:** `nativescript-app-sync release <AppSync-ios-appname> ios --mandatory --description "My mandatory iOS version"`

### Android
* **deploy to Staging:** `nativescript-app-sync release <AppSync-android-appname> android`
* **deploy to Production (default: Staging):** `nativescript-app-sync release <AppSync-android-appname> android --d Production`
* **release to users running any 1.x version (default: the exact version in AndroidManifest.xml):** `nativescript-app-sync release <AppSync-android-appname> android --targetBinaryVersion ~1.0.0`


## Troubleshooting

### "WARNING: Xcode is not installed or is not configured properly."
If Nativescript was updated or your local environment/os/etc has been changed this message can appear when trying to run a `tns <command>`.

### Try:

* run `sudo xcode-select --reset`


## Fastlane for Publishing

Run: `bundle exec fastlane <platform (ios/android)> <build/release/publish>`
