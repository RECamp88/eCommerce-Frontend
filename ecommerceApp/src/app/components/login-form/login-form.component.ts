import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';



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
    firstName:'',
    lastName: '',
    email: '',
    password: ''
  };
  
  constructor(
    private loginService : LoginService,
    private customerService : CustomerService,
    ) {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  reg_emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  hide = true;
  

  postLogin(): void {
   
    this.loginService.loginCustomer(this.customer).subscribe( json => {
      this.customer = json;
      console.log(this.customer);
      if(this.customer !=null){
        this.customerService.customer = this.customer;
        this.customerService.loggedIn = true;
        this.route.navigate(['/shop']);
      }else {
        (error: { status: number; }) => {
          if (error.status === 401) {
            this.message = "Invalid email or password. Please try again."
            setTimeout(() => {
              this.message = null;
            }, 15000)
          }
        }
      }
    });
  } 

}
