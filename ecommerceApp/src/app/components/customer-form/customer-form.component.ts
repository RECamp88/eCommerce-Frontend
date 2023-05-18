import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';




/* 
THIS COMPONENT DISPLAYS THE ACTUAL CUSTOMER ACCOUNT DATA
* Will be use for the customer to be able to update their information
* May end up utilizing this with the order form to populate customer information in the order.   
*/
 
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private router: Router, private customerService: CustomerService) {}

  userInput: any = this.customerService.accInfo;
  loginEmail: string = this.customerService.loginEmail;
  loginPassword: string = this.customerService.loginPassword;

 customer: Customer = {
   id: 0,
   name: '',
   balance: 0,
   email: '',
   password: '',
   order: []
 }
  showMessage = true;
  message: string | null = null;
  hide = true;

  addCustomer(): void {
    this.customerService.postRegister(this.customer).subscribe(json => {
    this.customer = json as Customer;
    console.log(json);});
    this.customerService.loggedIn=true;
    this.router.navigateByUrl('home');
  }

  ngOnInit(): void {
    this.clearFields();     
  }

  onLogout() {
    this.customerService.accInfo = null;
    this.customerService.loginEmail = null;
    this.customerService.loginPassword = null;
    this.userInput = null;
    this.router.navigateByUrl('/');
    this.customerService.loggedIn = false;
  }

  showProfile = true;

 
  clearFields() {
    this.customer.name = '';
    this.customer.email = '';
    this.customer.password = '';
       
  }
  
}

