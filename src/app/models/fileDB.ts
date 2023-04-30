import { Post } from "./post";

export class FileDB {
    id:number;
    name:String;
    type:String;
    data:Int32Array[];
    post:Post;
}