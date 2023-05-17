import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cartItems: CartItem[] = [];
  
  cartItem: CartItem = {
    id: 0,
    name: '',
    imageUrl: '',
    unitPrice: 0,
    quantity: 0
  };
  
  totalPrice: number=0;
  totalQuantity: number=0;
  constructor(private http : HttpClient) { }

addToCart(cartItem: CartItem){
  this.cartItems.push(cartItem);
  console.log(`Items In Cart: ${cartItem.name}`);
  this.computerCartTotals();
  
}

totalQuantityValue: number=0; 
totalPriceValue: number=0;  
computerCartTotals() {
  

  for (let currentCartItem of this.cartItems) {
    this.totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
    this.totalQuantityValue += currentCartItem.quantity;
  }
  this.totalPrice=this.totalPriceValue;
  this.totalQuantity=this.totalQuantityValue;
  console.log(`Total Price: ${this.totalPriceValue}`);
  console.log(`Total Quantity: ${this.totalQuantityValue}`);
  console.log(`-------------`);
}
  

  ev = "http://localhost:9000"
  // setting this environment variable helps when deploying.  
  // it means that we only have to change the host information in one place. 

  

}
