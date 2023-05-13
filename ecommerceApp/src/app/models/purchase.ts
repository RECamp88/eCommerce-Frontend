import { Customer } from "./customer";
import { Order } from "./order";
import { Product } from "./product";

export interface Purchase {
    customer : Customer,
    order : Order,
    orderProducts? : Product
}