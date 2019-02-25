import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig, AuthService, LinkedinLoginProvider, SocialUser } from 'ng4-social-login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Vendor } from '../Entities/vendor';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {
  public user : any = SocialUser;
  public loggedIn : boolean;

  public outuser = {
    email : null,
    password : null,
  }
   public myform : FormGroup
  constructor(public socialAuthService : AuthService, private router: Router,private service: LoginService, private formbuilder: FormBuilder) { }
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

    this.myform = this.formbuilder.group({
      email : ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"), Validators.minLength(8)]]

      
    })
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
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
  // signIn(){
  // let vendor = new Vendor(this.userInfo.userName, this.userInfo.password);
  // this.service.insert(vendor).subscribe(res =>{
  //   console.log(res);
  // })

  logIn(){
    this.outuser.email = this.myform.get('email').value;
    this.outuser.password= this.myform.get('password').value;
    let vendor = new Vendor(this.outuser.email, this.outuser.password)  
    this.service.insert(vendor).subscribe( res =>{
    alert(`Hello ${res[0].userName}`)
      
    })
    
    this.router.navigate(['/home'])
}
get email(){
  return this.myform.get('email');
}
get password(){
  return this.myform.get('password');
}

}
