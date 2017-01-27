import { Component, OnInit } from '@angular/core';

import { Post } from "../shared/post-class";
import { PostService } from "../shared/post-service";

@Component({
  selector: 'other-products',
  template: `
    <h3>Universāla pielietojuma produkti</h3>
    <div class="row col-md-8 col-md-offset-1"
        *ngFor="let product of products; let i = index;">
      <h1>{{product.header}}</h1>
      <p>
        {{product.mainText}}
      </p>
      <a [routerLink]="[product.id]"
          role="button"
          (click)="setCurrentProduct(product.id)">Uzzinat vairāk..</a>
    </div>

  `,
  styles: []
})
export class OtherComponent implements OnInit {
  private products: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.products = this.postService.getPosts('other');
    console.log(this.products);
  }
  setCurrentProduct(id){
    this.postService.setCurrentProductId(id);
   }

}
