import { Observable, Subscription } from 'rxjs';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';



@Component({
  selector: ' adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})


export class AdminproductsComponent implements OnDestroy{
  products= {  };
  filteredProducts!: any[];
  subscription: any



  constructor(private productService: ProductService) {
    
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products; 

    });
    
   }

//filter(query: string){
    
//this.filteredProducts = (query) ? 
//this.products.filter((p: { data: {title:string}, key: string }) => p.data.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : 
//this.products;
//}

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

    

