import { Component, OnInit } from '@angular/core';
import { Auth2Service } from '../auth2.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(public Auth: Auth2Service) {}
  
login(){
  this.Auth.login();
}

}
  

 //constructor(public afAuth: AngularFireAuth,
     // public router:Router){}
  //  private socialAuthService: SocialAuthService) {
//}
// Sign in with Google
//GoogleAuth() {
//  return this.AuthLogin(new GoogleAuthProvider());
//}
// Auth logic to run auth providers
//AuthLogin(provider:any) {
 // this.afAuth
   // .signInWithPopup(provider)
   // .then(() => this.router.navigate(['/home']))
  //  .catch((e) => console.log(e.message));
 //   }
    
//}

