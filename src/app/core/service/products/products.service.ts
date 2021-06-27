import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Product } from './../../../product.model';                                              
 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(
    private http: HttpClient
  ) { }

  getAlllProducts() {
    return this.http.get('');
  }

  getProduct(id: string) {
    return this.http.get(``);
  }
}
