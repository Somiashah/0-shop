
import { ShoppingCartService } from './../shopping-cart.service';

import { ShoppingCart } from './../models/shopping-cart';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
 
    cart$: Observable<ShoppingCart>;
  
    constructor(
      private shoppingCartService: ShoppingCartService,
    ){}
    
    async ngOnInit(){
      this.cart$ = await this.shoppingCartService.getCart();
    }
  
  }
