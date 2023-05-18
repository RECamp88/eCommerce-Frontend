import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: Product[] = [];
  
  constructor(public productService: ProductService, public customerService : CustomerService) {}
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(json => {
      this.products = json as Product[]; 
      console.log(this.products);
      })
  }
 
  addToOrder(id: number, prodId: number, customer: Customer){
    this.customerService.addToOrder(id, prodId, customer).subscribe( json => {
      this.customerService.customer = json as Customer;
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Item added to cart'
    })

    console.log(`${customer.order[prodId-1].name} was added to the cart`);
    })

  }
}
