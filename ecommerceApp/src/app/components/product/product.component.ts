import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  
  product: Product = {
    id: 0,
    name: '',
    unitPrice: 0,
    productImg: ''
    
  }
constructor(private productService: ProductService) {}

}
