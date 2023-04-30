import { Product } from "./product";
import {PostPayload} from "./post-payload";
import { Post } from "./post";
import { User } from "./user";

export class Comment {
    id!: number;


    content!: string;
  post: Post;

  user:User;
}
