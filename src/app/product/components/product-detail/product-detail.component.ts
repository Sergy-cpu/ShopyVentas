import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
   product: Product | any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params )=> {
      const id = params.id;
       
      this.productsService.getProduct(id).subscribe((res) => {
        this.product = res;
      });
              
    });
  }

}
