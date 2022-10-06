import { ShoppingCartItem } from './../models/shopping-cart-item';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
@Input('product')product:Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart')ShoppingCart :ShoppingCart
  constructor(private cartService:ShoppingCartService) { }




  addToCart(product)
  {
this.cartService.addToCart(product)
  }


}