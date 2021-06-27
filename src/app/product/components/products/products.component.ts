import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products/products.service'

import {} from './../../../core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponents implements OnInit {
 
  products: Product[] = [];

  constructor( 
    private productsService: ProductsService) { }

  ngOnInit() {
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  } 

  fetchProducts() {
    this.productsService.getAlllProducts().subscribe(products => {
      console.log(products);     
    });
  }
}
