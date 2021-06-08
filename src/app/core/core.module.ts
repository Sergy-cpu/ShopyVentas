import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './service/products/products.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
