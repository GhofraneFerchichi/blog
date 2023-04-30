import { Product } from "./product";

export class WishList {
    id!: number  ;
    name!:string;
    description!:string;
    image!:string;
    nprix!:number;
    gprix!:number;
    quantity!:number;

    constructor(product: Product){
        this.id = product.id
        this.name  = product.name
        this.description = product.description
        this.image = product.image
        this.nprix = product.nprix
        this.gprix = product.gprix
        this.quantity = 1
    }
}
