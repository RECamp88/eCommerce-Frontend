import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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
    productImg: ''
  }
  products: Product[] = [];
 
  constructor(public productService: ProductService) {}
 
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
      this.productService.getAllProducts().subscribe(json => {
      this.products = json as Product[]; 
      console.log(this.products);
      }); 
  } 

 
}
