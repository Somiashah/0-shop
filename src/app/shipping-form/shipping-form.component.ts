import { OrderService } from './../order.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth2Service } from '../auth2.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { Order } from '../models/order';
import { Input } from '@angular/core';
@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy  {
@Input ('cart') cart:ShoppingCart
  
  shipping ={};
  userId: string;
  userSub: Subscription;

  constructor(
    private orderService:OrderService,
    private authService: Auth2Service,
    private router: Router
  ){}

  async ngOnInit(){
    this.userSub = this.authService.user$.subscribe(user => this.userId = user.uid);
  }
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  async placeOrder() {
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items,
      totalPrice: this.cart.totalPrice
    }

    this.orderService.placeOrder(order);  
    this.router.navigate(['/ordersucess', ]);

  
 
  } 

  

}
