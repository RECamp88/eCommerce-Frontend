import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer = {
    id: 0,
    name: '',
    balance: 0,
    email: '',
    password: '',
    order: []
  }

  product: Product= {
    id: 0,
    name: '',
    unitPrice: 0,
    quantity: 0,
    productImg: ''
  }
  
  loggedIn : boolean = false;
  
  constructor(private http: HttpClient) { }

  ev = "http://localhost:9000";

  accInfo: any
  loginEmail: any
  loginPassword: any

  // this service is used for getting a customer registered with the system 
  // we are passing in a customer object that has been defined above based on the model. 

  postRegister(customer: Customer){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Customer>(`${this.ev}/customer/register`, customer, {headers: header});
  }
// this service is used for logging in an existing customer
// we are passing in a customer object that has been defined above based on the model. 

  postLogin(customer: Customer) {
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*"); 
    this.loggedIn = true;
    return this.http.post<Customer>(`${this.ev}/customer/login`, customer, {headers: header});
  }

  // this service is used for adding items to an order
  // we are passing in the customer id for the customer placing the order
  // we are passing in the product id for the item being added 
  // and we are sending the customer object where the order will reside. 

  addToOrder(id: number, prodId: number, customer: Customer){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*"); 
    return this.http.post<Customer>(`${this.ev}/customer/${id}/addToOrder/${prodId}`, customer, {headers: header});
  }

  // this service is used to retrieve a specific customer 
  // we pass in the customer id to retrieve the customer associated with the id. 

  getCustomer(id : number){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get(`${this.ev}/customer/{id}`, {headers: header}); 
  }

  // this service is used to simulate checking out
  // we pass in the customer number and the customer object

  checkout(id: number, customer: Customer){
    let header: HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Customer>(`${this.ev}/customer/{id}`, customer, {headers: header}); 
  }
  


}
