import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private baseUrl = 'http://localhost:8181/favoriteProduct';

  storageUserAsStr: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;
  

  constructor(private httpClient: HttpClient) {}

  getWishLists(): Observable<Product[]> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageUserAsStr.token}`,
      },
    };
    return this.httpClient.get<Product[]>(this.baseUrl + '/wishlist',config);
  }

  addWishList(id: number): Observable<any> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageUserAsStr.token}`,
      },
    };
    return this.httpClient.post<any>(this.baseUrl + '/wishlist/' + id,{}, config);
  }

  deleteWishList(id: number): Observable<any> {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.storageUserAsStr.token}`,
      },
    };
    return this.httpClient.delete(this.baseUrl + '/dwishlist/' + id,config);
  }
}