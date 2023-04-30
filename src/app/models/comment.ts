import { Product } from "./product";
import {PostPayload} from "./post-payload";

export class Comment {
    id!: number;

    idClient!: number;

    content!: string;
  post: PostPayload;

    likes!: number;

    produit!: Product;

    dateCreated!: Date;

    lastUpdated!: Date;
}
