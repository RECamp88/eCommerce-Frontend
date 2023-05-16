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

  @ViewChild('profile') profileRef!: ElementRef;
 
  constructor(private router: Router, private customerService: CustomerService) {}

  userInput: any = this.customerService.accInfo;
  loginEmail: string = this.customerService.loginEmail;
  loginPassword: string = this.customerService.loginPassword;

 customer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: ''
 }
  showMessage = true;
  message: string | null = null;
  hide = true;

  addCustomer(): void {
    this.customerService.postRegisterAPI(this.customer).subscribe(json => {
    this.customerService.customer = json;
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

  updateInfo() {
      let customerUpdate: Customer = {
        id: this.customer.id,
        firstName: this.userInput.firstName,
        lastName: this.userInput.lastName,
        address: this.userInput.address,
        email: this.userInput.email,
        password: this.userInput.password
      }
      this.customerService.patchInfoAPI(this.customer.id, customerUpdate).subscribe(json => {
        console.log(customerUpdate);
        this.customerService.accInfo = json;
        
      });
  }

  clearFields() {
    this.customer.firstName = '';
    this.customer.lastName = '';
    this.customer.address = '';
       
  }
  
}

