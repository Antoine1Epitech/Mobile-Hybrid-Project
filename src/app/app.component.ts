import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { ProfilPage } from '../pages/profil/profil';
import { HomePage } from '../pages/home/home';
import { CreditCardPage} from '../pages/credit-card/credit-card';
import { IonicApp, IonicModule, Config } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  activePage: any;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private config: Config, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      {title: 'Home', component: HomePage, icon:'home'},
      {title: 'Profil', component: ProfilPage, icon:'person'},
      {title: 'Credit Card', component: CreditCardPage, icon:'card'}
    ];
    this.activePage = this.pages[0];
    firebase.initializeApp({
      apiKey: "AIzaSyDETPBqn7LuClsMHmoSdNwx7jCjDdDoGi0",
      authDomain: "mobile-hybrid-project.firebaseapp.com",
      databaseURL: "https://mobile-hybrid-project.firebaseio.com",
      projectId: "mobile-hybrid-project",
      storageBucket: "mobile-hybrid-project.appspot.com",
      messagingSenderId: "62360612970"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
    this.config.set("scrollPadding", false);
    this.config.set("scrollAssist", false);
    this.config.set("autoFocusAssist", true);

    this.config.set("android", "scrollAssist", true );
    this.config.set("android", "autoFocusAssist", "delay");
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }

}

