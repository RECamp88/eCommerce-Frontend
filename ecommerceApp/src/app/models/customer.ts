import { Product } from "./product"

export interface Customer {
    id: number,
    name: String,
    balance: number,
    email : String,
    password: String
    order: Product[];
}