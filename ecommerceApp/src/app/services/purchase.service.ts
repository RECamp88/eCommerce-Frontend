import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http : HttpClient) { }

  ev = "http://localhost:9000"
  // setting this environment variable helps when deploying.  
  // it means that we only have to change the host information in one place. 
}
