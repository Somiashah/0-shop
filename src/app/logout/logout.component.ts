import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../ng-auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent  {

  constructor(public ngAuthService: NgAuthService) {}


  

}