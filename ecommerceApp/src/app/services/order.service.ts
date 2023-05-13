import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private HttpClient : HttpClient) { }

  ev = "http://localhost:9000"
  // setting this environment variable helps when deploying.  
  // it means that we only have to change the host information in one place. 
}
