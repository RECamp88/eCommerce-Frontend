import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn = false;
}

// I am not sure that I need this particular service as I have already addressed this in customer.service.  