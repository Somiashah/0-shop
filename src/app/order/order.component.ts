import { Router } from '@angular/router';
import { OrderService } from './../order.service';
import { Auth2Service } from './../auth2.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  

 
  order$;

  constructor(auth: Auth2Service,private OrderService:OrderService, private router:Router) {
    //this.order$ = auth.user$
     // .pipe(switchMap(u => OrderService.getOrdersByUser(u.uid)));
    }

}

