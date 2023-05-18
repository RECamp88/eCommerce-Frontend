import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  product: Product={
    id: 0,
    name: '',
    unitPrice: 0,
    productImg: '',
    quantity: 1
  }
  products: Product[] = [];
  customerService: any;
  
  constructor(public productService: ProductService, customerService : CustomerService) {
    this.productService = productService;
    this.customerService = customerService;
  }
 
  ngOnInit(): void {
    this.refresh();
  }
 
  refresh(): void {
      this.productService.getAllProducts().subscribe(json => {
      this.products = json as Product[]; 
      console.log(this.products);
      }); 
  } 

  addToCart(tempProduct: Product){
    console.log(tempProduct);
    const cartItem = tempProduct;
    this.customerService.addToCart(cartItem);

  }
 
}
