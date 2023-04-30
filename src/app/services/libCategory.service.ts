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
import {libCategory} from "../models/libCategory";



  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  @Injectable({
    providedIn: 'root',
  })
  export class LibCategoryService {
    baseUrl = 'http://localhost:8082/libCat';
    lib: libCategory = new libCategory();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

    getLibCatList(): Observable<libCategory[]> {
      return this.httpClient.get<libCategory[]>(this.baseUrl + '/getAll');
    }
    getLibCatById(id: number): Observable<libCategory> {
      return this.httpClient.get<libCategory>(`${this.baseUrl}/find/` + id);
    }

    addLibCat(formData: libCategory): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/add', formData);
    }

    updateLibCat(formData: FormData): Observable<any> {
      return this.httpClient.post(this.baseUrl + '/update', formData);
    }

    deleteLibCat(lib: any): Observable<libCategory> {
      const url = `${this.baseUrl}/delete/${lib.id}`;
      return this.httpClient.delete<libCategory>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };





  }

