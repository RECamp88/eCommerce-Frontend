import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer = {id: 0, firstName: '', lastName: '', email: '', password: ''}
  loggedIn : boolean = false;
  
  
  constructor(private http: HttpClient) { }

  ev = "http://localhost:9000"

  accInfo: any
  loginEmail: any
  loginPassword: any

  postRegisterAPI(customer: Customer){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    this.loggedIn = true;
    return this.http.post<Customer>(`${this.ev}/customer/register`, customer, {headers: header});
  }


  resetAccInfo() {
    this.accInfo = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }
}
