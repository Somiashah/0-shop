import { ShoppingCartItem } from './models/shopping-cart-item';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  take,map } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})

  export class ShoppingCartService {

    constructor(private db: AngularFireDatabase) { }
  
    
    async getCart(): Promise<Observable<ShoppingCart>> {
      let cartId = await this.getOrCreateCartId();
      return this.db
          .object('/shopping-carts/' + cartId)
          .valueChanges()
          .pipe(map((x)=> (x) ? new ShoppingCart(( x as any).items): (x as any)
    ));
  }
   //async getCart(): Promise<Observable<ShoppingCart>> {
  //  let cartId = await this.getOrCreateCartId();
  //  return this.db.object('/shopping-cart/' + cartId).snapshotChanges()
  //  .pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));
//  } 
    async addToCart(product: Product) {
      
      this.updateItem(product, 1);
    }
  
    async removeFromCart(product: Product) {
      this.updateItem(product, -1);
    }
  
    async clearCart(){
      let cartId = await this.getOrCreateCartId();
      this.db.object('/shopping-carts/' + cartId + '/items').remove();
    }
  
    private create() {
      return this.db.list('/shopping-carts').push({
        dateCreated: new Date().getTime()
      });
    }
  
    private getItem(cartId: string, productId: string) {
      return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }
  
    private async getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      console.log(cartId);
      if (cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key ?? '');
      
      return result.key;
    }
            // but we want to return the id instead

    

  
  
 //  private async updateItem(product: Product, change: number) {
  //    let cartId = await this.getOrCreateCartId();
  //    let item$ = this.getItem(cartId, product.key);
   //   item$
     //   .snapshotChanges()
     //   .pipe(take(1))
     //   .subscribe(item => {
      //    let quantity = (item.payload.child("/quantity").val() || 0) + change;   payload.exportVal().quantity + change;
       //   if(quantity == 0) item$.remove();
       //  else item$.update({
       //     title: product.title,
       //     imageUrl:product.imageUrl,
       //     price: product.price,
       //     quantity: quantity
       //   });
      // });
  //  }
   private async updateItem(product: Product, change: number) {
      let cartId = await this.getOrCreateCartId();
     let item$ = this.getItem(cartId, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe(item => {
  
    if (item.payload.exists()) {
      let quantity = (item.payload.child("/quantity").val() || 0) + change; 
       if (quantity === 0) item$.remove();
    else
         item$.update({product: product,
          quantity: quantity
       });
     } else {
      item$.set({product: product, quantity: 1});
    }
    })
 }
  }