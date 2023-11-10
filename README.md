# Qubika React Native Template

Monitor it's development [here](https://docs.google.com/document/d/1mpgBIfBWDOL2pw5XLXoJTbe1oC9GlHqfCuhKIh6f66U/edit?usp=sharing)

This project aims to be a strong foundation for react-native applications. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## Usage

#### Use Template button

Click the "Use this template" button above the file list, then use the Owner drop-down menu, and select the account you want to own the repository. Creating a repository from a template has the following advantages:

- A repository created from a template starts with a single commit.
- Commits to a repository created from a template do appear in your contribution graph.
- Creating a repository from a template starts a new project quickly.

### Option 1: Using React-Native-Rename

You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

Note: Please read the Setup environments section that is below in this file for more information about the execution scripts.

### Option 2: Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Setup environments

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`

DEV: `yarn ios` or `yarn android`

STG: `yarn ios:staging` or `yarn android:staging`

PROD: `yarn ios:prod` o `yarn android:prod`

Also, you can use npm following the same rule as before: `npm run ios:staging`

Modify the environment variables files in root folder (`.env.development`, `.env.production` and `.env.staging`)

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu

  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu

  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

#### Environment variables

The template approach is separating the `js` env variables from the `native` ones.

- The first should be written into the `.env` files, like `API_BASE_URL=XXX`.

```
API_BASE_URL=XXX
```

- The second should be written directly on the native config files each platform provides, for example the `Info.plist` (iOS) files or `res/values/strings.xml` (android).

```xml
<!-- Android res/values/strings.xml -->
<string name="app_name">YourAppName</string>
```

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Folder structure

The suggested architecutre is described [here](https://michalzalecki.com/elegant-frontend-architecture/), but the basis of it is:

- `src`: This folder is the main container of all the code inside your application.
  - `ui`: Holds every visual component specific to your application. Custom styling and atomic components should live here, but not anything specific to your domain like "a list of users", only a "card" or "label".
  - `infrastructure`: Holds generally useful elements to your application, that support it in its function. The api and authentication submodules are set-up as prominent examples of this. State management (e.g. the redux store) also lives here.
  - `application`: Is the owner of your lifecycle and in charge of navigation. This module is the most specific to your app in terms of a "mobile executable", and cares the most about the device you might be running on, and the direct interaction with the user.
  - `features`: Is composed of submodules that fully contain all of the business-centric aspects of your application. Many examples are set up on the boilerplate of different possible usecases, but it is impossible that any "domain" submodule can be generally enough to be included in a boilerplate. Each domain can export, in its index file, components or reducers that can be bound to your Redux store or to one or more screens for its use.

## Authentication

The authentication session handling is mainly done through `SessionContext` and `SessionProvider`. These two provide `logIn` and `logOut` methods (which should be used instead of directly using the `SessionService`), and they also provide some useful info regarding the `logIn` query (i.e., `isPendingLogIn` and `logInError`) as well as the `isAuthenticated` flag (which is already used to check which navigation stack should be mounted).

The user info can be accessed through `Redux` under the `session` slice. This slice is persisted using `EncryptedStorage`.

This authentication implementation already handles the api authentication too. This is done in `SessionProvider` through the usage of `useAPIConfig`. By default, the module sets up a "Bearer Token" type of authentication, and also logs out the user when the api detects a 401 Unauthorized error code in a response. Although this behavior is relatively common, your use case could be different; you can modify the authentication method used in `useSetUpTokenWithAPI` and the unauthorized behavior (the callback) in `SessionProvider`'s usage of `useAPIConfig`.

## Caveats:

### Localization

The library used to localize the app is `react-native-localization`.

For dates we are using `date-fns` and therefore, in case you need to add a new language you will have to add a respective locale for it in the languages file.

**Disclaimer:** By default if the app language is not supported by your string files, the first language in the object will be used.

### Text components

A creator function is used to centralize and simplify the creation of Text components.
Create a new one by following these steps:

1. Using StyleSheet, create a style inside `src/ui/text` folder
2. Declare and create a new text component by using the `makeText` creator function, with the style just created
3. Add your component to the `text` module exports
4. Import it from anywhere inside the Navigator's scope and use it

**Disclaimer:** styles are applied to the custom Text component following this order

1. Theme: The theme's colors.text is applied first as the default color
2. The style passed during the component declaration
3. The style passed to the component when using it.

### Fonts

A custom font was added as an example using `npx react-native-asset`. Steps to add a new one:

1. Add font file to the `assets/fonts` folder. OTF format is preferred.
2. Run `npx react-native-asset` to link the fonts to the native projects
3. Rebuild the app to load the custom fonts in your app

You can go into [this instructions](https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4) to learn more
