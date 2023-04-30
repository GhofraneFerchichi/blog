import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }

  getComments() {
    return this.httpClient.get(`http://localhost:8082/api/comment/all`)
  }
  getCommentByPost(id: any) {
    return this.httpClient.get(`http://localhost:8082/api/posts/comment/`)
  }
  saveComment(comment: any) {
    return this.httpClient.post(`http://localhost:8082/api/comment/add`, comment)
  }
  deleteComment(id: any) {
    return this.httpClient.delete(`http://localhost:8082/api/comment/delete/${id}`)
  }
}
