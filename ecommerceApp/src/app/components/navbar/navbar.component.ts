import { Component} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { NavbarService } from 'src/app/services/navbar.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 


  constructor(public customerService: CustomerService, public navbarService: NavbarService) { }

  get isLoggedIn() {
    return this.customerService.loggedIn;
  } 

  
}
