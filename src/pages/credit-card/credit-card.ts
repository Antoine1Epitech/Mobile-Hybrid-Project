import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image'
import firebase from 'firebase';
import * as Constants from '../data';
/**
 * Generated class for the CreditCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {
  imageUrls = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private imageSrv: ImageProvider) {
    this.downloadImageUrls(); 
  }

  ionViewDidLoad() {
    this.downloadImageUrls(); 
    console.log('ionViewDidLoad CreditCardPage');
  }

  downloadImageUrls() {
    let promiseList = [];
    for (let i = 0; i <= Constants.tabImg.length; i++) {
      let promise = this.imageSrv.getImage(firebase.auth().currentUser.uid, Constants.tabImg[i]);
      promiseList.push(promise);
    }
    Promise.all(promiseList)
      .then(urls => {
        this.imageUrls = urls;
        console.log(urls);
      });
  }
}
