import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products: any;
 
  constructor(public productService: ProductService) {}
 
  ngOnInit(): void {
    this.refresh();
  }

   refresh(): void {
      this.productService.getAllProducts().subscribe(json => {this.products = json; console.log(this.products);}); 
   } 

    
}
