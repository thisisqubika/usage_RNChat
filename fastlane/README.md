fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android buildDevAAB

```sh
[bundle exec] fastlane android buildDevAAB
```

Build the aab for Development

### android buildDevAPK

```sh
[bundle exec] fastlane android buildDevAPK
```

Build the apk for Development

### android buildStagingAAB

```sh
[bundle exec] fastlane android buildStagingAAB
```

Build the aab for Staging

### android buildStagingAPK

```sh
[bundle exec] fastlane android buildStagingAPK
```

Build the apk for Staging

### android buildProductionAAB

```sh
[bundle exec] fastlane android buildProductionAAB
```

Build the aab for Production

### android buildProductionAPK

```sh
[bundle exec] fastlane android buildProductionAPK
```

Build the apk for Production

----


## iOS

### ios signing

```sh
[bundle exec] fastlane ios signing
```

Set up signing for the application

### ios buildDev

```sh
[bundle exec] fastlane ios buildDev
```

Build the application for Development

### ios buildStaging

```sh
[bundle exec] fastlane ios buildStaging
```

Build the application for Staging

### ios buildProduction

```sh
[bundle exec] fastlane ios buildProduction
```

Build the application for Production

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
