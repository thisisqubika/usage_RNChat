<br>
<br>

<p  align="center">

<img  src="https://media.licdn.com/dms/image/D4E0BAQFzvHK-9_P_vg/company-logo_200_200/0/1689269711421/moove_it_logo?e=2147483647&v=beta&t=fnCGH4R1s61rp7nMLEAxbklxp3rkbTw-SfXtRQYE1fg"  width="152"  />

<img  src="https://reactnative.dev/img/logo-og.png"  width="290"  />

<img  src="https://media.licdn.com/dms/image/D4E0BAQFzvHK-9_P_vg/company-logo_200_200/0/1689269711421/moove_it_logo?e=2147483647&v=beta&t=fnCGH4R1s61rp7nMLEAxbklxp3rkbTw-SfXtRQYE1fg" width="152"  />

</p>

<h1  align="center">Reactika</h1>

<h3  align="center">Welcome to the updated React Native Qubika Template</h3>

<br>

## 👋 Introduction

This project aims to be a strong foundation for every new react-native application. It provides a clear and organized structure, core dependencies, and boilerplate to jumpstart development.

## ⚡ Starting a new Project

### Option 1. Use Reactika as a template

#### Step 1. Create a new repository

Click the "Use this template" button above the file list, then "Create a new repository". Creating a repository from a template has the following advantages:

- Creating a repository from a template is the fastest way of starting a new project.

- A repository created from a template starts with a single commit.

- Commits to a repository created from a template show up in your contribution graph.

#### Step 2: Rename using react-native-rename

On the new project, use [react-native-rename](https://github.com/junedomingo/react-native-rename) to set the desired project's name. Just run the script, delete your node modules and reinstall them and you should be good to go.

Disclaimer: In the current state of this project, it should give you no issues at all, but keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any React Native project:

- Go to your project's root folder and run `npm install`.
- Run the script defined in the package.json file to install ios dependencies: `npm run pods`
- Run `npm run ios` or `npm run android` to start your application!

Note: Please read the [Setup environments](#setup_envs) section for more information about the execution scripts.

### Option 2: Copy the structure to your own project

If you want to roll on your own and don't want to use Reactika as a template, you can just create a new project using `npx react-native init` (or `npx create-expo-app`) and then copy one by one the `/src` folder as well as the configuration files.

Keep in mind that if you do this, you'll have to **install** all the dependencies (as well as the corresponding native code for each of the libraries that require it).

## <a name="setup_envs"></a> ⚙️ Set up environments

### 🪛 Choose your package manager

If your preferred package manager is npm then you are good to go, the `package-lock.json` is already commited in the project and github workflows are using it too for caching.

In case you prefer yarn, that's fine too! Steps to follow are:

1. Delete `package-lock.json` file

2. Run `yarn install` and make sure to commit the newly created `yarn.lock`

3. In the `./github/workflows` follow the steps in the `codeQualityCheck.yaml` file to start caching with yarn. Caching is crucial to reduce the load on GitHub's runners by storing and reusing dependencies during runs.

### <a name="environments"></a> 🧮 Environments

The project comes with `dev`, `stg` and `prd` as the default environments. If your project needs others, just read through this section and make the required changes on the native projects.

The template also comes with pre-defined scripts to run the project in debug/release. Keep in mind that if you create new `envs` you need to adapt them to build the corresponding new environments.

To define which env you want to use, just follow the structure `npm run [platform]: [environment]`

e.g: To run a dev build in debug run: `npm run ios` or `npm run android`

#### Env files

Environment variables **for the JS side**, are defined on a per-env basis, in different files. Find these in the root folder (`.env.development`, `.env.production` and `.env.staging`)

#### Android flavors

The environemnts were mapped 1 to 1 with Android flavors to setup the variants on this platform. A map associating flavors with env files is already defined in `app/build.gradle`. Modify or add your own environments if needed.

Disclaimer: For multiple enviroments to work you will need to update your `proguard-rules.pro` file with the name of your project's main class.

`-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }`

#### iOS Schemes/Targets

The environments were mapped 1 to 1 with Schemes (And their corresponding target) on iOS. Each scheme has the corresponding environment file associated, so you can easily alternate between them. The role of the targets is to hold any specific native configuration and pick up environment specific files (Such as the Firebase `GoogleServices-Info.plist`)

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

- The first should be written into the `.env.[ENVIRONMENT]` files, like `API_BASE_URL=XXX`.

```
API_BASE_URL=XXX
```

- The latter should be written directly on the native config files each platform provides, for example the `Info.plist` (iOS) files or `res/values/strings.xml` (Android).

```xml
<!-- Android res/values/strings.xml -->

<string  name="app_name">YourAppName</string>
```

### 🪄 Generate release builds

These are the steps to generate `.aab` or `.apk` and `.ipa` files, using Fastlane, a Ruby open source tool.

#### Step 1. Install dependencies

1. Install dependencies using bundler: `bundle install`

#### Step 2. Android setup

1. Generate an upload key for signing the release build

2. Set up gradle variables as explained in [Environments](#environments)

3. Execute `fastlane android build[Type][Output]`

Note: `Type` in `[Dev, Staging, Prod]` and `Output` in `[APK, AAB]`

For more info please about generating the key refer to [Official Android Release Process](https://reactnative.dev/docs/signed-apk-android)

#### Step 3. iOS setup

1. Create and download an Appstore Connect API key.

2. Fill in `APP_STORE_CONNECT_API_KEY` properties in the `fastlane/.env.default`.

3. Fill in the TEAM id values, for team id and itc team id in the `fastlane/.env.default`.

4. Execute `fastlane android build[Type]`

Note:

- `Type` in `[Dev, Staging, Prod]`

For more info please go to [Official iOS Release Process](https://reactnative.dev/docs/publishing-to-app-store)

## 📂 Folder structure

The suggested architecutre follows the ideas discussed in [Elegan FE Architecture](https://michalzalecki.com/elegant-frontend-architecture/), but the main responsabilities of each high-level folder are:

- `src`: This folder is the main container of all the code inside your application.

- `ui`: Holds every visual component specific to your application. Custom styling and atomic components should live here, but not anything specific to your domain like "a list of users", only a "card" or "label".

- `infrastructure`: Holds generally useful elements to your application, that support it in its function. The api and authentication submodules are set-up as prominent examples of this. State management (e.g. the redux store) also lives here.

- `application`: Is the owner of your lifecycle and in charge of navigation. This module is the most specific to your app in terms of a "mobile executable", and cares the most about the device you might be running on, and the direct interaction with the user.

- `features`: Is composed of submodules that fully contain all of the business-centric aspects of your application. Many examples are set up on the boilerplate of different possible usecases, but it is impossible that any "domain" submodule can be generally enough to be included in a boilerplate. Each domain can export, in its index file, components or reducers that can be bound to your Redux store or to one or more screens for its use.

## 👀 Design Decisions:

### 🔓 Authentication

Reactika tries to solve the basic Authentication setup that most apps need.

For this purpose, it provides `SessionContext` and `SessionProvider`. These two expose `logIn` and `logOut` methods which encapsulate the logic to call the authentication api, and they also provide some useful info regarding the status of the authentication process (`isPendingLogIn`, `logInError`, and an `isAuthenticated` flag).

This implementation already handles the api setup too. This is done by setting up two interceptors:

1. For outgoing requests, which injects a "Bearer Token" type `Authorization` header.
2. For incoming responses, which logs out the user whenever a 401 code `Unauthorized` is received.

Although this behavior is relatively common, your use case could be different, in which case you can customize the behavior by messing with the `useSetUpTokenWithAPI` and `useAPIConfig` hooks in the `SessionProvider`.

### 💾 Global State and Persistance

Redux toolkit has been setup as the default global state manager. It already contains one slice, the `session` slice, to hold the data related to the authentication of the user.

Notice that this slice is persisted using `EncryptedStorage` for higher security, while the others slices can be persisted with the standard `AsyncStorage`.

### 🗨️ Localization

The library used to localize the strings of the app is `react-native-localization`.

For dates managament Reactika uses `date-fns` and thus in case your app supports a new language, you will have to add the corrresponding "locale" for it in the languages file.

**Disclaimer:** If the device's language is not supported by your strings files, the first language in the `languages` object will be used.

### 🔠️ Text components

A creator function is implemented to centralize and simplify the creation of Text components.

Create a new one by following these steps:

1. Using StyleSheet, create a style inside `src/ui/text` folder

2. Declare and create a new text component by using the `makeText` creator function, with the style just created

3. Add your component to the `text` module exports

4. Import it from anywhere inside the Navigator's scope and use it

**Note 1:** styles are applied to the custom Text component following this order

1. Theme: The theme's colors.text is applied first as the default color

2. The style passed during the component declaration

3. The style passed to the component when using it.

**Note 2:** You should not use raw text inside these components (eslint will prompt you about this). Instead, you should use constants/variables that contain the text you would like to display, like so:

```typescript
// ... component

const  foo = 'bar'; // constant that contains the text displayed

// Suppose H1 is a text component

return <H1>{ foo }</H1>;
```

### ✨ Fonts

Custom fonts can be easily added to the project following the standard process. A custom font was added as an example using `npx react-native-asset`.

Steps to add a new one:

1. Add font file to the `assets/fonts` folder. OTF format is preferred.

2. Run `npx react-native-asset` to link the fonts to the native projects

3. Rebuild the app to load the custom fonts in your app

Read [this guide](https://mehrankhandev.medium.com/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4) to learn more about how to configure custom fonts
