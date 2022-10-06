import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
products:Product[]=[];
cart$:Observable<ShoppingCart>
category:string
//category:string;
filteredProduct:Product[]=[];

constructor(
  private route:ActivatedRoute,
  private productService:ProductService,private shoppingCartService:ShoppingCartService
  ) {



  }

   

  



   //getAll().pipe(
   // switchMap(products => {
     // this.products=products;
   //   
    // return route.queryParamMap;
  //  }))

  //  .subscribe(params=>{
    //  this.category=params.get('category');


   //   this.filteredProduct=(this.category)?
   //   this.products.filter(p=>p.category===this.category):
   //  this.products;-->

   // });--



 // }
 

  async ngOnInit(){
    this.cart$= (await this.shoppingCartService.getCart());
    this.populateProducts();
    
  }
  private populateProducts() {

   this. productService.getAll().pipe(
      switchMap(products=>{
        this.products = products;
        return this.route.queryParamMap;
      }))
      .subscribe(params =>{
        this.category = params.get('category');
       this.applyFilter();
      });

  }


private applyFilter(){


this.filteredProduct =(this.category)?
this.products.filter(p=>p.category === this.category):
this.products;
}

}

//}
