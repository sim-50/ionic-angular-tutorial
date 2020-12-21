# ionic-angular-tutorial
Simplified Rayaud Project aims to help patients and doctors on monitoring their Rayaud symptom situations on time. 

This project is an Android platform mobile app written by Ionic &amp; Angular with Capacitor.

## Needed software
1. Visual Studio Code <br />
2. Android Studio <br />

## lib installed for project 
1. chart.js : used for data visualization<br />
$ npm install chart.js --save <br /> 


2. @ionic/storage <br />
$ npm install --save @ionic/storage <br />

3. moment: used for formating time <br />
$ npm install moment --save <br />

4. eventemitter3: used for event services between pages<br />
npm install --save eventemitter3 <br />

## Available Scripts at web app stage

In the project directory, you can run:

### ionic serve

Runs the app in the web app mode.<br />
Open [http://localhost:8100](http://localhost:8100) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Available Scripts from a web app to Android mobile app

### step 1: ionic build

Build web assets and prepare your app for any platform targets. After this command, a "www" folder would be created for future capacitor configuration.

### step 2: ionic capacitor add android

Add Android platform specific folder to our project.

### step 3: ionic capacitor run android

Through this command, the project would automatically do the following things: <br />
i. Perform ionic build (or run the dev server from ionic serve with the --livereload option) <br />
ii. Copy web assets into the specified native platform <br />
iii. Open the IDE for this project (Android Studio for Android) <br />

### step 4: setup android studio with correct JDK and simulators

After these, the Android app should be run successfully if Android Studio is set up previously. <br />
