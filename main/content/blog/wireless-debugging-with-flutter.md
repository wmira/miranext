---
draft: false
external: false
title: "Wireless debugging with VS Code Flutter to an Android Device"
description: "A guide on how to enable wireless debugging on an android device from VS Code"
date: 2022-11-24
---

If you are tired trying to use a USB cable while doing development with flutter then this
wireless way of debugging really feels liberating.

## Connecting Your Android Device via Wifi Debugging

This assumes that you will be using the Flutter VS Code Extension for your development and you already
have it installed as per the [guide](https://docs.flutter.dev/get-started/install). 

If you open your Flutter VS Code Extension, you might notice that your Android device might not be
available on the devices list. 

![Device Not Found in Flutter VS Code](/images/wireless-debugging-with-flutter/device_not_available_in_flutter_vscode_extension.png)

To connect your device wirelessly such that it shows in this list then start with opening Android Studio.
Ensure you have a project opened, can be any sample project. Now when the project is open, go to Toolbar
and click the dropdown besides the run configuration. You should see "Pair Devices Using Wifi". Click on it

![Android Studio Toolbar](/images/wireless-debugging-with-flutter/androidstudio_toolbar.png)

A popup should open where you can see a QR code. You should scan this code from your Android device. Ensure that
you are using the scanner from  Developer Options > Wireles Debugging section of your Android Phone.  Scanning
it via the camera will not work.

![Pair New Device](/images/pair_new_device.png)

Once connected, you should then be able to see your Android devices from the Flutter VS Code extension. 

![Android Device Connected](/images/pair_new_device.png).

You can now select it and then click "Run > Start Debugging" or click "F5"

