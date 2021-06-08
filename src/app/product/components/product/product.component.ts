import { Component,
     Input,
      Output,
       EventEmitter,
        OnChanges,
         SimpleChanges,
         OnDestroy,
          OnInit,
           DoCheck } from '@angular/core';

import { Product } from '../../../product.model';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck{

   @Input()
    product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();


    constructor() {
        console.log('1. constructor');
    }

    /* ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    } */

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. Do check');
    }

    ngOnDestry() {
        console.log('5.3 on destroy');
    }

    addCart() {
        console.log('Agregar al carrito');
        this.productClicked.emit(this.product.id);
    }
}