import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent  {
  categories$
  @Input('category')category;
  constructor(categoryService:CategoryService){
    this.categories$ = categoryService.getcategories();
   }

  

}
