import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { SocialLoginModule , AuthService, GoogleLoginProvider , FacebookLoginProvider , LinkedInResponse, AuthServiceConfig, LinkedinLoginProvider}from 'ng4-social-login';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";


/////////////////////////////////////Components////////////////////////////////////
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavdropComponent } from './home-page/navdrop/navdrop.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider : new GoogleLoginProvider('259111091723-rjbjqnj8bg326fdmejvm5bci0qnj1p3k.apps.googleusercontent.com'),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('526227857893828')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider:new  LinkedinLoginProvider('812r84a7n3hl3c')
  }
 ], false)
 
 const appRoutes : Routes = [
   {
     path: 'home',
     component : HomePageComponent
   },
   {path: '', component: LoginComponent },
   {path: 'termsandconditions', component: TermsandconditionComponent},
   {path: 'contactus', component: ContactUsComponent}

 ]
 export function provideConfig(){
   return config;
 }
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    TermsandconditionComponent,
    ContactUsComponent,
    NavdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide :AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
