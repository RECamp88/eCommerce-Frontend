import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { NavbarService } from './navbar.service';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInCustomer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: ''
  };

  constructor(private http : HttpClient, 
              private customerService : CustomerService,
              private routerService : Router,
              private navbarService : NavbarService) { 
  }

  ev = "http://localhost:9000"           
  
  setCustomer(customer: Customer){
    this.loggedInCustomer = customer;
  }

  setEmail (email : string){
    this.loggedInCustomer.email = email;
  }

  setPassword (password : string){
    this.loggedInCustomer.password = password;
  }

  verifyCustomer(customer: Customer) : boolean {
    if(customer.email == undefined) return false;
    if(customer.password == undefined) return false;

    return true;
  }

  loginCustomer(customer : Customer) : Observable<Customer> {
    if(this.verifyCustomer(customer)==false){
      throw new Error("Invalid credentials")
    }
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Customer>(`${this.ev}/customer/login`, customer, {headers: header});

  }

  logout(): void {
    this.customerService.loggedIn = false;
    this.routerService.navigate(["/Welcome"]); // welcome page will be the landing page where customers have to loging or register.
    this.navbarService.setSelected("home"); 
  }

  login(customer: Customer, callback? : (LoginService?:LoginService)=>{}) : void {
    console.log(customer);
    let loginResponse : Observable<Customer> = this.loginCustomer(customer);

    loginResponse.subscribe(json => {
      if(json.email == null) {
        console.log(json);
        throw new Error("login(): Invalid credentials");
      }else {
        this.setCustomer(customer);
        this.customerService.customer = json;
        this.customerService.loggedIn = true;

        this.routerService.navigate(["/shop"]);
        this.navbarService.setSelected("shop");

        if (callback != undefined) callback(this);
      }
    });
  }
}
