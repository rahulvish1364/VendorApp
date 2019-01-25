import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig, AuthService, LinkedinLoginProvider, SocialUser } from 'ng4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {
  public user : any = SocialUser;
  public loggedIn : boolean;
   userInfo = {
    userName : null,
    password : null
   }
  constructor(public socialAuthService : AuthService, private router: Router) { }
  facebookLogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData =>{
      this.user = userData
    })
    debugger;
    this.routeHome();
  }
  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userData=>{
      this.user = userData;
    })
    debugger;
    this.routeHome();
  }
  linkedinLogin(){
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(userData=>{
      this.user = userData;
      
    })
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
  ngOnInit() {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  }
  routeHome(){
    debugger;
   if (this.user.email ) {
     //alert(`Hello ${this.user.name}`);
     localStorage.setItem('userSocial', JSON.stringify(this.user));
    console.log(localStorage.getItem('userSocial'));

     this.router.navigate(['/home'])
   } else {
      alert('Please Login first')
    } }
  routeHome2(){
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    console.log(localStorage.getItem('userInfo'));
    
    this.router.navigate(['/home']);
  }

}
