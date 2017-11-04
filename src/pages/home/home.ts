import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth/auth';
import { LoginPage } from '../login/login'
import firebase from 'firebase';
import { Camera , CameraOptions } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image'
import * as Constants from '../data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera]]
})

export class HomePage {
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  constructor(public navCtrl: NavController, private camera : Camera, private imageSrv: ImageProvider) {
    this.myPhotosRef = firebase.storage().ref(firebase.auth().currentUser.uid);
  }
  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
 
  selectPhoto(): void {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
 
  private uploadPhoto(): void {
    this.myPhotosRef.child(this.generateUUID())
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }
 
  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
 /* OpenPicture(): void {
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
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
        return this.imageSrv.uploadImage(base64Image, firebase.auth().currentUser.uid);
      })
      .then(data => {
        Constants.tabImg.push(data.a.name);
        localStorage.setItem('images', JSON.stringify(Constants.tabImg));
      });
    }

 takePicture() {
    this.camera.getPicture(this.cameraOptions)
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
        return this.imageSrv.uploadImage(base64Image, firebase.auth().currentUser.uid);
      })
      .then(data => {
        Constants.tabImg.push(data.a.name);
        localStorage.setItem('images', JSON.stringify(Constants.tabImg));
      });
  }
  Disconnect(): void {
    firebase.auth().signOut();
    this.navCtrl.push(LoginPage)*/
  //}
//9502
}