import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import {Course} from "../models/course";



  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  @Injectable({
    providedIn: 'root',
  })
  export class CourseService {
    [x: string]: any;
    baseUrl = 'http://localhost:8082/course';
    course: Course = new Course();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

    getCourseList(): Observable<Course[]> {
      return this.httpClient.get<Course[]>(this.baseUrl + '/getAll');
    }
    getCourseSubjectList(): Observable<any[]> {
      return this.httpClient.get<any>('http://localhost:8082/subject/getAll');
    }
    getCourseById(idCourse: number): Observable<any> {
      return this.httpClient.get<any>(`${this.baseUrl}/getAll/${idCourse}`  );
    }

    addCourse(course: any,iduser:any,idcs:any): Observable<any> {
      return this.httpClient.post(`${this.baseUrl}/addCourse/${iduser}/${idcs}`, course);
    }

    updateCourse(data: any,id:any): Observable<any> {
      return this.httpClient.put(`${this.baseUrl}/update/${id}`, data);
    }

    deleteCourse(idCourse: any): Observable<Course> {
      const url = `${this.baseUrl}/delete/${idCourse}`;
      return this.httpClient.delete<Course>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };





  }

