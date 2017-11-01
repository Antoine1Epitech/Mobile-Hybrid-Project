import firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export namespace data {
  export const UID: string = 'None'
}

@Injectable()
export class AuthData {
  constructor() {}


  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

signupUser(name: string, surname: string, email: string, password: string): Promise<any> {
  return firebase
.auth()
.createUserWithEmailAndPassword(email, password)
  .then( newUser => {
      firebase
  .database()
  .ref('userProfile')
  .child(newUser.uid)
      .update({ email: email,
        name: name,
        surname: surname
       });
});
}
resetPassword(email: string): Promise<any> {
  return firebase.auth().sendPasswordResetEmail(email);
}

logoutUser(): Promise<any>{
  return firebase.auth().signOut();
}

}