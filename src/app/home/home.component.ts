import { Component, OnInit } from '@angular/core';
import { Auth2Service } from '../auth2.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public AuthService: Auth2Service) {}

  ngOnInit() {}
}
