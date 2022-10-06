import { Observable } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class NgAuthService {
  userState:any

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => { 
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user') ?? ' ')       } else {
          localStorage.setItem('user',' ')      
            JSON.parse(localStorage.getItem('user') ?? ' ')       }
    });
  }

  SignIn(email:any, password:any) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['Home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email:any, password:any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
       // this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //SendVerificationMail() {
   // return this.afAuth.currentUser
     // .then((u) => u.sendVerificationMail())
     //.then(() => {
     //  this.router.navigate(['verify-email']);
     // });
 // }

  ForgotPassword(passwordResetEmail:any) {
    this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean { 
    const user = JSON.parse(localStorage.getItem('user') ?? ' ') 
    return user !== null && user.emailVerified !== false ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider:any) {
   this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['Home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userState, {
      merge: true,
    });
  }

  logOut() {
    
   this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/product']);



      
    });
  }
}
