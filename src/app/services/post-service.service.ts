import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { FileDB } from '../models/fileDB';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  getPostsurl="http://localhost:8089/post/getAllpost";
  getPostbyIdsurl="http://localhost:8089/post/getpost";
  addPostUrl="http://localhost:8089/post/addPost";
  modifierPostUrl="http://localhost:8089/post/updatepost";
  deletePostUrl="http://localhost:8089/post/deletepost";
  uploadfilef="http://localhost:8089/File/uploadf";
  getfiledetail="http://localhost:8089/File/filesdetail";
  getfiledeposturl="http://localhost:8089/File/filesdearticle";
  deletefiles="http://localhost:8089/File/delete-file";
  constructor(private http : HttpClient) { }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.getPostsurl}`);

  }
  getPostbyId(id:Number): Observable<Post>{
    return this.http.get<Post>(`${this.getPostbyIdsurl}/${id}`);

  }
  ajoutPost(Post :Post): Observable<Post>{
    return this.http.post<Post>(`${this.addPostUrl}`,Post);
  }
  upload(file :File): Observable<Number>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Number>(`${this.uploadfilef}`,formData)
    };
    getFilesdetail(id:Number): Observable<FileDB> {
      return this.http.get<FileDB>(`${this.getfiledetail}/${id}`);
    }
    getFilesdevoyage(id:Number): Observable<FileDB> {
      return this.http.get<FileDB>(`${this.getfiledeposturl}/${id}`);
    }
  updatePost(id:Number, Post:Post):Observable<Post>{
    return this.http.put<Post>(`${this.modifierPostUrl}/${id}`,Post);
  }
  deletePost(id:number): any{
    return this.http.delete(`${this.deletePostUrl}/${id}`);
  }
  affecterfileaupost(id:Number,idf:Number,article :Post):Observable<Post>{
    return this.http.put<Post>("http://localhost:8089/File/affecter-fileToArticle/"+id+"/"+idf,article);
  }
  deletefile(id:Number,idp:Number): any{
    return this.http.delete(`${this.deletefiles}/${id}/${idp}`);
  }
}
