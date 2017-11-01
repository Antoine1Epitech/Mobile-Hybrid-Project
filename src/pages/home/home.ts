import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'
import firebase from 'firebase';
import { Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera]]
})

export class HomePage {
  private imageSrc: string;
  constructor(public navCtrl: NavController, private camera : Camera) {

  }

  OpenPicture(): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
      err => console.log(err));  
  }

  TakePicture(): void {
    
  }
  Disconnect(): void {
    firebase.auth().signOut();
    this.navCtrl.push(LoginPage)
  }
//9502
}