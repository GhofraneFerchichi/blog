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
  export class ProductService {
    [x: string]: any;

    baseUrl = 'http://localhost:8082/product';
    product: Product = new Product();

    public dataForm!: FormGroup;

    constructor(private httpClient: HttpClient) {}
    storageUserAsStr: any = localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '{}')
      : null;

    getProductList(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(this.baseUrl + '/getAll');
    }
    getCategoryList(): Observable<any[]> {
      return this.httpClient.get<any>('http://localhost:8082/category/all');
    }
    getProdById(id: number): Observable<any> {
      return this.httpClient.get<any>(`${this.baseUrl}/getAll/${id}`  );
    }

    addProduct(product: any,iduser:any,idcs:any): Observable<any> {
      return this.httpClient.post(`${this.baseUrl}/addProduct/${iduser}/${idcs}`, product);
    }

    updateProduct(data: any,id:any): Observable<any> {
      return this.httpClient.put(`${this.baseUrl}/update/${id}`, data);
    }

    deleteProduct(id: any): Observable<Product> {
      const url = `${this.baseUrl}/delete/${id}`;
      return this.httpClient.delete<Product>(url);
    }

    post_options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };





  }
