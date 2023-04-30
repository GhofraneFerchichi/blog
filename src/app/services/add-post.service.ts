import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import {FormGroup} from "@angular/forms";
import {PostPayload} from "../models/post-payload";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AddPostService {


  [x: string]: any;

  baseUrl = 'http://localhost:8082/post';
  post: PostPayload = new PostPayload();

  public dataForm!: FormGroup;

  constructor(private httpClient: HttpClient) {
  }

  storageUserAsStr: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;

  getPostList(): Observable<PostPayload[]> {
    return this.httpClient.get<PostPayload[]>(this.baseUrl + '/getAll');
  }

  getCommentList(): Observable<any[]> {
    return this.httpClient.get<any>('http://localhost:8082/api/comment/getall');
  }

  getPostById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/getAll/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/addPos`, post);
  }
  addPostcom(comment: any,iduser:any,idcs:any): Observable<any> {
    return this.httpClient.post(`http://localhost:8082/api/comment/addPost/${iduser}/${idcs}`, comment);
  }
  saveComment(comment: any, postId: number): Observable<any> {
    return this.httpClient.post(`http://localhost:8082/api/comment/add/${postId}`, comment);
  }

  updatePost(data: any, id: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/update/${id}`, data);
  }

  deletePost(id: any): Observable<PostPayload> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete<PostPayload>(url);
  }
  getAllPosts():Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8082/post/getAll");
  }


  addCom(c: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(
      'http://localhost:8082/comment/add-commentaire',
      c
    );
  }

  modifyCom(c: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(
      'http://localhost:8082/comment/modify-commentaire',
      c
    );
  }

  deleteCom(id: any) {
    return this.httpClient.delete<Comment>(
      'http://localhost:8082/comment/remove-client/' + id
    );
  }

  getByIDCom(idc: number): Observable<Comment> {
    return this.httpClient.get<Comment>(
      'http://localhost:8082/comment/retrieve-commentaire/' + idc
    );
  }

  // @ts-ignore
  getByIDComUser(idc: number): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageUserAsStr.token}`,
      }),
      withCredentials: true,
    };
  }
  getPost(permaLink:Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8082/post/get/'+ permaLink);
  }
  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
