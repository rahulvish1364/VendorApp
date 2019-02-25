import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Vendor } from '../Entities/vendor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

 url: string = "http://localhost:3010/api/vendor/SignIn";

  constructor(private http: HttpClient) { }
  insert(vendor: Vendor) :Observable <any>
  {
    console.log(vendor);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
  
    let headers = new HttpHeaders({'Content-type':'application/json'})
    let options = {headers: headers};
  
    return this.http.post(this.url, vendor, httpOptions).pipe(map(res=>{
    return res;  
    }))
  }
}


