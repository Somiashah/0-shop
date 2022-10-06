import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth2Service } from './auth2.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{



  constructor(private Auth:Auth2Service) { }

  canActivate(): Observable<boolean> {
    return this.Auth.appUser$.pipe(
        map(appUser => appUser.isAdmin) // Mapping App user observable to a boolean observable
    );
  }
}