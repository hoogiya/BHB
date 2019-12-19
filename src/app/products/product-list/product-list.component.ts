import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] = [];
  errorMessage: string; 

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getJSON().subscribe(data => {
    //     this.products = data;
    // });
    this.products = JSON.parse(localStorage.books);
  }

}
