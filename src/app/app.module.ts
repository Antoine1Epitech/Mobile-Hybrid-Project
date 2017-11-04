import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthData } from '../providers/auth/auth';
import { ProfilPage } from '../pages/profil/profil';
import { CreditCardPage} from '../pages/credit-card/credit-card';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../providers/image/image';
import { HttpModule } from '@angular/http';
//import { LoginPage} from '../pages/login/login'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilPage,
    CreditCardPage,
    
    //LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilPage,
    CreditCardPage,
    //LoginPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    ImageProvider,
    ImageProvider
  ]
})
export class AppModule {}
