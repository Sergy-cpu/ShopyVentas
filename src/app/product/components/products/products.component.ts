import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products/products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponents implements OnInit {
 
  products: Product[] = [ 
    {
      id: '1',
      image: '../assets/img/camiseta.webp',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: '../assets/img/hoodie.webp',
      title: 'Hoodie',
      price: 50000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: '../assets/img/mug.png',
      title: 'Mug',
      price: 90000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: '../assets/img/pin.webp',
      title: 'Pin',
      price: 180000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: '../assets/img/stickers1.png',
      title: 'Stickers',
      price: 70000,
      description: 'bla bla bla bla bla'
    },
    
  ];

  constructor( private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAlllProducts();
  }

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  } 
}
