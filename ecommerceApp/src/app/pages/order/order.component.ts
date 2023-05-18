import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  cartItems: Product [] = []
  customer: Customer = {
    id: 0,
    name: '',
    balance: 0,
    email: '',
    password: '',
    order: []
  } 
  

  constructor(public customerService: CustomerService){}

  ngOnInit(): void {
    this.customerService.getCustomer(this.customerService.customer.id).subscribe (json => {
      this.customer = json as Customer;
      this.cartItems = this.customer.order;
      console.log(this.customer);
      console.log(this.cartItems);
      
    });
  }


 processOrder() {
  //subscribe to processing the order from the back end to get the order number. 
  this.customerService.checkout(this.customerService.customer.id, this.customer).subscribe(json => {
    this.customerService.customer = json as Customer;

    //this clears the order
    this.ngOnInit();
  });
  Swal.fire({
    title: "Your order has been placed!",
    text: "Your order number is: AAS549825.You will be emailed with the tracking number once the items have been shipped.",
    icon: 'success',
    confirmButtonColor: '#70A9A1'
  })

 }

}
