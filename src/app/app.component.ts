import { Subscription } from 'rxjs';
import { Auth2Service } from './auth2.service';

import { UserService } from './User.service';
import { Router } from '@angular/router';
  import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription;
  
  constructor(private Auth: Auth2Service, router: Router, UserService:UserService) {
    Auth.user$.subscribe(user => {
      if (!user) return;
     
      UserService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return; 

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }
}