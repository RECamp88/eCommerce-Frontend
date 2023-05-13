import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  
  ev = "http://localhost:9000"

  // setting this environment variable helps when deploying.  
  // it means that we only have to change the host information in one place. 


  //retrieving all the products
  getAllProducts() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/product/all`, { headers : header});
  }
}
