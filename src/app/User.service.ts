import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth'
@Injectable(
)

export class UserService {
  constructor(private db:AngularFireDatabase) { 
  }
  
   save(user: firebase.User) {
      this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }
  
    get(uid: string): Observable<any> {
      return this.db.object('/users/' + uid).valueChanges();
    }
  
  }