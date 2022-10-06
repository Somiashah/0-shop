import * as  firebase from 'firebase/auth';
import { Auth2Service } from './../auth2.service';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { AppUser } from '../models/app-user';
import { UserService } from '../User.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
 cart$:Observable<ShoppingCart>
  appUser:AppUser
  constructor(public Auth: Auth2Service,
    private cartservice:ShoppingCartService) {}



    async ngOnInit() {
      //
      
      this.Auth.appUser$.subscribe((appUser) => (this.appUser = appUser)); // Subscribing here to avoid using the async pipe in the html template that causes infinite loop

       this.cart$ = await this.cartservice.getCart();
    
  
     }
logout(){
  this.Auth.logout();




}

}


