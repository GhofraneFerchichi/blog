import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get(`${environment.baseUrl}/subject/getAll`)
  }
  getSubjectById(id: any) {
    return this.http.get(`${environment.baseUrl}/subject/getAll/${id}`)
  }
  saveSubject(subject: any) {
    return this.http.post(`${environment.baseUrl}/subject/add`, subject)
  }
  deleteSubject(id: any) {
    return this.http.delete(`${environment.baseUrl}/subject/delete/${id}`)
  }
}
