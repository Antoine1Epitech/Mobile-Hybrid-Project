import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Disconnect(): void {
    firebase.auth().signOut();
    this.navCtrl.push(LoginPage)
  }

}