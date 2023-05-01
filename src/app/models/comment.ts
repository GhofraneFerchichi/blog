import { Post } from "./post";
import { User } from "./user";

export class Comment {
  id: Number;
  content: string;
  post: Post;
  user: User;
}
