import { Order } from './models/order';
import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db:AngularFireDatabase, private ShoppingCartService:ShoppingCartService) { }

     
     async placeOrder(order) {
       const result = await this.db.list('/order').push(order);
       return result;
     }
   
     getOrder() {
       return this.db.list<Order>('/order').valueChanges();
     }
   
     viewOrder(orderId: string) {
       return this.db.object<Order>('/order/' + orderId).valueChanges();
     }
   
     cancelOrder(orderId: string) {
       return this.db.object('/order/' + orderId).remove();
     }
   
   //  getOrdersByUser(userId: string) {
    //   return this.db.list<Order>('/order', query => query.orderByChild('userId').equalTo(userId))
     //  .snapshotChanges()
      // .pipe(
        // map(actions =>
         //  actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
         //)
       //);
     //}
   }