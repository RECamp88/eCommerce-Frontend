import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product: Product = {
    id: 0,
    name: '',
    unitPrice: 0,
    imageURL: ''
  }
constructor(private productService: ProductService) {}

}
