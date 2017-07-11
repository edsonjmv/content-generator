import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      const config = {
        apiKey: "AIzaSyCGtw4pNP913gZKETVGRfe8UXmkShI8s60",
        authDomain: "content-generator-a571d.firebaseapp.com",
        databaseURL: "https://content-generator-a571d.firebaseio.com",
        projectId: "content-generator-a571d",
        storageBucket: "content-generator-a571d.appspot.com",
        messagingSenderId: "642413967595"
      };
      firebase.initializeApp(config);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
