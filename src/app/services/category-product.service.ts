import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryProduct } from '../models/category-product';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {
  private baseUrl = "http://localhost:8082/category"
  constructor(private httpClient:HttpClient) { }

  getCategories() {
    return this.httpClient.get(`http://localhost:8082/category/getAll`)
  }
  getCategoryById(id: any) {
    return this.httpClient.get(`http://localhost:8082/category/getAll/${id}`)
  }
  saveCategory(category: any) {
    return this.httpClient.post(`http://localhost:8082/category/add`, category)
  }
  deleteCategory(id: any) {
    return this.httpClient.delete(`http://localhost:8082/category/delete/${id}`)
  }
}
