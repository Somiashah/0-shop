import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { Auth2Service } from './auth2.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(public AuthService:Auth2Service,
     private router: Router) { }

  canActivate(route , state: RouterStateSnapshot) {
    return this.AuthService.user$.pipe(map(user => {
      if (user) return true;

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
      return false;
    }));
  }
}   