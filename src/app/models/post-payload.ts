import {Comment} from "./comment";

export class PostPayload {
        [x: string]: any;
        postId!:number;
        content!:string;
        title!:string;
        userName!: string;
  comments: Comment[];
        image!:string;
        post?:PostPayload;


      }

