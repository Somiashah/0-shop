import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';



@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent   {
  categories$:any
  product:any={}
   id:any;
  constructor(private CategoryService:CategoryService, 
  private productService:ProductService,
private router:Router,
private route:ActivatedRoute,
   ) 
   { 

    this.categories$= this.CategoryService.getcategories()
      
       this.id = this.route.snapshot.paramMap.get('id');

    if(this.id)
      
      // Important line of code to get single product from firebase
   
     this.productService.getProduct(this.id).pipe(take(1)).subscribe(p=> this.product =p)

    

   }
        
    


     
  

save(product:any)
{
    if (this.id)
    this.productService.update(this.id, product);
   else
      this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

delete() {
  if (!confirm('Are you sure you want to delete this product?'))
   return;

  this.productService.delete(this.id);
 this.router.navigate(['/admin/products']);
}


}