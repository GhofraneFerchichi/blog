import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl: string;
    nprix: number;
    gprix: number;
    quantity: number;
    productId: number;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.image;
        this.quantity = cartItem.quantity;
        this.nprix = cartItem.nprix;
        this.gprix = cartItem.gprix;
        this.productId = cartItem.id;
    }
}
