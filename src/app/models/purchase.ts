import { Address } from "./address";
import { Order } from "./order";
import { OrderItem } from "./order-item";
import { User } from "./user";

export class Purchase {
    customer!: User;
    shippingAddress!: Address;
    billingAddress!: Address;
    order!: Order;
    orderItems!: OrderItem[]; 
}
