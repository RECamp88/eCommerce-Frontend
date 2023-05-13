import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';


/* THIS COMPONENT DISPLAYS THE ACTUAL CUSTOMER ACCOUNT DATA
 May end up utilizing this with the order form to populate customer information in the order.   */
 
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  @Input()
  customer : Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: ''
    
  };
  
  constructor() {}
}

