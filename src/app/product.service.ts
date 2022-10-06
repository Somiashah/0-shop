import { AngularFireDatabase,  } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})




export class ProductService {
  


  constructor(private db:AngularFireDatabase) { }

create(product:any)
{
return this.db.list( '/products').push(product);
}

getAll() {
  return this.db.list('/products')
      .snapshotChanges()
      .pipe(
          map(changes =>
              changes.map(c => {
                  const data = c.payload.val() as Product;
                  const key = c.payload.key;
                  return { key, ...data };
              })
          )
      );
}
 


  




getProduct(productId:any){
  return this.db.object<Product>('/products/' + productId).valueChanges();
}

update(id:any, product:any) {
  return this.db.object('/products/' + id).update(product);
}

delete(productID:any) {
  return this.db.object('/products/' + productID).remove();
}
}

  


