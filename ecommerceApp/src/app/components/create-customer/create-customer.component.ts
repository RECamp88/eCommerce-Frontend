import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  customer : Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  newCustomer : Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  message : string = "Your registration was successful!";
  show : boolean = false;
  show2 : boolean = true;
  show3 : boolean = false;
  hide = true;

  constructor(private customerService : CustomerService) {}

  reg_email: string = "";
  reg_password: string = "";
  reg_message: string | null = null;
  route: any;
  messageVisible: boolean = true;
  registerVisible: boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  createUser() : void {
    this.customerService.postRegisterAPI(this.customer).subscribe(json => {
      this.customer = json; 
      console.log(this.customer); 
      this.newCustomer = this.customer; 
      console.log(this.newCustomer)});
      this.show = true;
      this.show2 = false;
      this.route.navigate(['/shop']);
  }

  ngOnInit() :void {
    if (this.customerService.loggedIn && this.customerService.customer != undefined) {
      this.newCustomer = this.customerService.customer;
      this.show2 = false;
      this.show3 = true;
    }
  }
}
