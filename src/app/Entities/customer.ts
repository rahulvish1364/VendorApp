import {IUser} from './user';
import { Constructor } from '@angular/material/core/typings/common-behaviors/constructor';

export class Customer  {
    cName: string;
    email: string;
    password: string;   
    contact: [
        {
        address: string
    }, 
    {
        phNumber: number
    },
    {
        city: string
    }         
  ]
  constructor(email, password){
    this.email= email;
    this.password= password;
    this.contact = null;
    this.cName= null;
  }
    
}


/*
cName, EMAIL PASSWORD CONTACT 
ARRAY [{ADDRESS }{PHONENO}{CITY}]


*/