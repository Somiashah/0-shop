import { UserService } from './User.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import * as  firebase from 'firebase/auth';

import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from './models/app-user';
import { switchMap } from 'rxjs/operators';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  user$: Observable <firebase.User>;
  

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  login() {
    // Store the return URL in local storage
    const returnUrl = this.route.snapshot.queryParamMap.get('returnURL') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    // signInWithRedirect() takes an auth provider object
    this.afAuth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/products']);

  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap(user => {
        if (user)
          return this.userService.get(user.uid);
        else
          return of(null);
      })
    );
  }
}