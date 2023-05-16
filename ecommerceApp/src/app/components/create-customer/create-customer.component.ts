import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Customer } from 'src/app/models/customer';


/* THIS COMPONENT IS USED TO FILL OUT THE REGISTRATION AND SUBMIT IT
This is the form the customer will be presented with when registering for an account.  */


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: ''
  }

  @Output() registreEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() {}



  
}
