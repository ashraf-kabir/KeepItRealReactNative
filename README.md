# KeepItRealReactNative

### Install Oracle JDK 17 LTS
Download and install from: https://www.oracle.com/java/technologies/javase/jdk17-0-13-later-archive-downloads.html
### Setting up JAVA_HOME on Windows
1. Open "Environment Variables" dialog:
Right-click on "This PC" or "My Computer" on the desktop or in File Explorer
Select "Properties"
Click on "Advanced system settings" on the left
Click on "Environment Variables" button
2. Add JAVA_HOME variable:
Click "New" under "System variables"
Set "Variable name" to JAVA_HOME
Set "Variable value" to the path of your JDK installation (e.g., C:\Program Files\Java\jdk-17)
Click "OK"
3. Update the Path variable:
Find and select the "Path" variable under "System variables", then click "Edit"
Click "New" and add the following entry:
```
%JAVA_HOME%\bin
```
Click "OK" to close all dialog boxes
4. Restart your computer to apply the changes.

### Setting up ANDROID_HOME on Windows
1. Open "Environment Variables" dialog:
Right-click on "This PC" or "My Computer" on the desktop or in File Explorer
Select "Properties"
Click on "Advanced system settings" on the left
Click on "Environment Variables" button
2. Add ANDROID_HOME variable:
Click "New" under "System variables"
Set "Variable name" to ANDROID_HOME
Set "Variable value" to the path of your Android SDK (e.g., C:\Users\YourUsername\AppData\Local\Android\Sdk)
Click "OK"
3. Update the Path variable:
Find and select the "Path" variable under "System variables", then click "Edit"
Click "New" and add the following entries:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```
Click "OK" to close all dialog boxes
4. Restart your computer to apply the changes.

## Project Setup Instructions

```sh
npx @react-native-community/cli@latest init KeepItRealReactNative
```

```sh
cd KeepItRealReactNative
```

```sh
code .
```

### run diagnostics, to make sure SDK and cli tools are compatible
```sh
npx react-native doctor
```

### serve the project on android & connect your android device
```sh
npx react-native run-android
```

### APK location after build
The generated APK can be found at:
```
project_root_dir/android/app/build/outputs/apk/debug/app-debug.apk
```

### Web version extra packages installation
```
sh
npm install react-native-web react-dom --legacy-peer-deps
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript --legacy-peer-deps
npm install ajv ajv-keywords --legacy-peer-deps
npm install react@19.2.4 --legacy-peer-deps
```

### Serve the project on web
```sh
npm run web
```

Note: You may have to adjust android SDK & it's build tools version. You can use Android Studio's SDK manager to install required SDK versions. Besides, please do make sure you have set up ANDROID_HOME, JAVA_HOME environment variables correctly. Please use Java JDK 17 LTS for best compatibility. Also, make sure to enable USB debugging on your android device and connect it via USB cable. Finally, use the command "npx react-native doctor" to check for any compatibility issues.
