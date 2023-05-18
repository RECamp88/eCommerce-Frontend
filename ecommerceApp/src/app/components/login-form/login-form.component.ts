import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


/* THIS COMPONENET IS USED FOR LOGGING IN 
This is the form the customer will be presented to log in. 
 */

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']  
})
export class LoginFormComponent {
  
  message: string | null = null;
  route: any;
  messageVisible: boolean = true;
  registerVisible: boolean = true;

  customer: Customer = {
    id: 0,
    name: '',
    balance: 0,
    email: '',
    password: '',
    order: []
  };
  
  constructor(
    private customerService: CustomerService,
    private router: Router
    ) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
 
  onRoute(): void{
    this.router.navigate(['/account']);
  }
  postLogin(): void {
   
    this.customerService.postLogin(this.customer).subscribe( json => {
    this.customerService.customer = json;
    console.log(this.customer);
    this.customerService.loggedIn = true;      
    });
  } 

}
