import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-sucess',
  templateUrl: './order-sucess.component.html',
  styleUrls: ['./order-sucess.component.css']
})
export class OrderSucessComponent 
 {

  constructor(route :Router) { 

  

  setTimeout(() => {
    route.navigate(['/products'])
  }, 5000 )
  
}
}
