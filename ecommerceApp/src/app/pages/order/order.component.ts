import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  cartItems: CartItem [] = []
  
  cartTotal: number=0;
  
  //need to bring in purchase to have access to all the information for the html
  constructor(public orderService: OrderService, private router: Router){}

 totalForCart() {
  this.cartTotal = this.orderService.totalPrice;
 }

 processOrder() {
  //subscribe to processing the order from the back end to get the order number. 
  this.router.navigate(['/checkout']);

 }
}
