import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from "../shared/post-class";
import { PostService } from "../shared/post-service";

@Component({
    selector: 'single-product',
    template: `
    <h3>{{product.header}}</h3>
    <div class="row col-md-8 col-md-offset-1">
      <div class="well">
        <h6>{{product.imgPath}}</h6>
      </div>
      <p>
        {{product.mainText}}
      </p>
    </div>
    <div class="row">
      <div class="col-md-1 col-offset-md-1">
        <button class="btn-info" (click)="navigateBack()">Atpakal</button>
        <a role="button" [routerLink]="['../']">Atpakal</a>
      </div>
    </div>

  `,
    styles: []
})
export class SingleProductComponent implements OnInit {
  private productId: number;
  private product: Post;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private postService: PostService,
    ) { }

    navigateBack() {
      this.router.navigate(['../'], {relativeTo: this.route});
    }


    ngOnInit() {
      this.productId = this.postService.getCurrentProductId();
      // console.log(this.productId);
      this.product = this.postService.getExactPost(this.productId);
      //console.log(this.product);
    }

}
