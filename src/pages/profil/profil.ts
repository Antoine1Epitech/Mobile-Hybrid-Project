import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  public myPerson = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
    const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
    personRef.on('value', personSnapshot => {
      this.myPerson = personSnapshot.val();
    });
  }
  Editchange(name: String, surname: String, email: String): void {
    if (name == null &&  surname != null && email != null) {
    const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
    personRef.update ({email: email,
    surname: surname})
    }
    else if (name != null &&  surname != null && email == null) {
    const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
    personRef.update ({name: name,
    surname: surname})
    }
    else if (name == null &&  surname == null && email != null) {
      const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
      personRef.update ({email: email})
      }
    else if (name != null &&  surname != null && email != null){
      const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
      personRef.update ({email: email,
      name: name,
      surname: surname})
    }
    else if (name != null &&  surname == null && email == null){
      const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
      personRef.update ({name: name,
    })
    }
    else if (name == null &&  surname != null && email == null){
      const personRef: firebase.database.Reference = firebase.database().ref(`/userProfile/` + firebase.auth().currentUser.uid);
      personRef.update ({
      surname: surname})
    }
  }
}
