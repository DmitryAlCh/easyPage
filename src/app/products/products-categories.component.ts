import { Component, OnInit } from '@angular/core';
import { ProductCategoryComponent } from "./product-category.component";

@Component({
  selector: 'products-categories',
  template: `
    <div class="row">
      <app-product-category></app-product-category>
    </div>
  `,
  styles: []
})
export class ProductsCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
