import { Product } from "../models/product";

export class CartItem {

    id: number;
    name: String;
    imageUrl: String;
    unitPrice: number;

    quantity: number; 

    constructor(product: Product){
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.productImg;
        this.unitPrice = product.unitPrice;

        this.quantity = 1;
    }
}
