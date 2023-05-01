import { FileDB } from "./fileDB";
import { PostDislike } from "./postDislike";
import { Postlike } from "./postLike";
import { User } from "./user";
import { Comment } from "./comment"

export class Post {
    postId:Number;
    title:String;
    content:String;
    image:String;
    created_At:String;
    user:User;
    files:FileDB;
    comment:Comment[];
    likes:Postlike[];
    dislikes:PostDislike[];
}