import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { LoginService } from 'src/app/services/login.service';
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
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: ''
  };
  
  constructor(
    private loginService : LoginService,
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
   
    this.loginService.loginCustomer(this.customer).subscribe( json => {
      this.loginService.loggedInCustomer = json;
      console.log(this.loginService.loggedInCustomer);
      this.customerService.loggedIn = true;
      
    });
  } 

}
