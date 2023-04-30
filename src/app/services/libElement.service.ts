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
import {libElement} from "../models/libElement";



  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  @Injectable({
    providedIn: 'root',
  })
  export class LibElementService {
    baseUrl = 'http://localhost:8082/lib';
    lib: libElement = new libElement();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

    getLibList(): Observable<libElement[]> {
      return this.httpClient.get<libElement[]>(this.baseUrl + '/getAll');
    }
    getLibById(id: number): Observable<libElement> {
      return this.httpClient.get<libElement>(`${this.baseUrl}/find/` + id);
    }

    addLib(formData: FormData): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/add', formData);
    }

    updateLib(formData: FormData): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/update', formData);
    }

    deleteLib(lib: any): Observable<libElement> {
      const url = `${this.baseUrl}/delete/${lib.id}`;
      return this.httpClient.delete<libElement>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };





  }

