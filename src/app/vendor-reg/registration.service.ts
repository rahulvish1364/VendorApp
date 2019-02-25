import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url : string = "http://localhost:3010/api/customerSingIn";
  constructor() { }
}
