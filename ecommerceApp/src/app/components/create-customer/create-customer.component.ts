import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

/* THIS COMPONENT IS USED TO FILL OUT THE REGISTRATION AND SUBMIT IT
This is the form the customer will be presented with when registering for an account.  */


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit{

  customer: Customer = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  @Output() registreEvent: EventEmitter<any> = new EventEmitter();
  
  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {
      
  }
  
  onClick(): void {
    this.addCustomer();
    this.router.navigate(['/shop']);
  }

  addCustomer(): void {
    this.customerService.postRegisterAPI(this.customer).subscribe(json => {
    this.customerService.customer = json;
    console.log(json);});
  }
  
}
