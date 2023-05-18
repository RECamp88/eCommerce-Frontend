import { Component} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 


  constructor(public customerService: CustomerService) { }

  get isLoggedIn() {
    return this.customerService.loggedIn;
  } 

  
}
