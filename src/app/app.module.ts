import { AuthGuard } from './auth-guard.service';
import { Auth2Service } from './auth2.service';
import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { NgAuthService } from './ng-auth.service';
import { LoginComponent } from './login/login.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { AdminproductsComponent } from './admin/adminproducts/adminproducts.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import{AngularFireModule}from '@angular/fire/compat';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { FilterProductComponent } from './products/filter-product/filter-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Login2Component } from './login2/login2.component';
import { UserService } from './User.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  CheckoutComponent,
  HomeComponent,
  ProductsComponent,
  
  AdminordersComponent,
  AdminproductsComponent,
  LogoutComponent,
  OrderSucessComponent,
  OrderComponent,
  ForgotPasswordComponent,
  ProductFormComponent,
  FilterProductComponent,
  ProductCardComponent,
  ProductQuantityComponent,
  ShoppingCartComponent,
  Login2Component,
  ShoppingCartSummaryComponent,
  ShippingFormComponent,
  ViewOrderComponent,




  ],
  imports: [
    BrowserModule,
    RouterModule,
   FormsModule,
   CustomFormsModule,
    NgbModule,
    AngularFirestoreModule,


    AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
   AngularFireAuthModule,
RouterModule.forRoot([
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'shoppingcart',component:ShoppingCartComponent},
  {path:'login', component:LoginComponent},

  {path:'checkout', component:CheckoutComponent,canActivate:[AuthGuard]},
  {path:'ordersucess/:id', component:OrderSucessComponent ,canActivate:[AuthGuard]},
  {path:'admin/products/new', component:ProductFormComponent,canActivate:[AuthGuard]},
  {path:'admin/products/:id', component:ProductFormComponent,canActivate:[AuthGuard]},
  {path:'admin/products',component:AdminproductsComponent,canActivate:[AuthGuard]},

  
  {path:'shippingform',component:ShippingFormComponent},
  {path:'ordersucess',component:OrderSucessComponent},



  {path:'admin/adminorders', component:AdminordersComponent},
  {path:'admin/product-form', component:ProductFormComponent},

  {path:'myorder', component:OrderComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },

]),
NgbModule,
AppRoutingModule,


    
  ],
  providers: [
   NgAuthService,
  AuthGuard,
   CategoryService,
   ProductService,
   ShoppingCartService,
   OrderService,
   Auth2Service,
 UserService,
 AuthGuard
 
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
