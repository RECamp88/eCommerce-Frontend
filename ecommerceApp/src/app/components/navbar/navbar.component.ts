import { Component} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 
  hideMatBadge : boolean = true;
  badgeCounter : number = 0;

  constructor(public customerService: CustomerService) { }

  get isLoggedIn() {
    return this.customerService.loggedIn;
  } 

  incrementCount() {
    this.badgeCounter++;
    this.hideMatBadge = false;
  }

  decreaseCount() {
    if(this.badgeCounter<0){
      return;
    }      
    this.badgeCounter--;
    if(this.badgeCounter == 0){
      this.hideMatBadge = true;
    }
  }

  resetCount() {
    this.badgeCounter = 0;
    this.hideMatBadge = true;
  }
}
