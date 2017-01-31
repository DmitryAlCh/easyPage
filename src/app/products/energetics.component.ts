import { Component, OnInit } from '@angular/core';
import { Post } from "../shared/post-class";
import { PostService } from "../shared/post-service";
import { Category } from "../shared/category-class";

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'EnergeticsComponent',
  template: `
    <h3>Produkti primāri izstrādātie Enerģētikas nozarei</h3>
    <div class="row col-md-8 col-md-offset-1"
        *ngFor="let product of products; let i = index;">
      <h1>{{product.header}}</h1>
      <p>
        {{product.mainText}}
      </p>
      <a [routerLink]="[product.id]"
          role="button">Uzzinat vairāk..</a>
    </div>
  `,
  styles: []
})
export class EnergeticsComponent implements OnInit {
  private products: Post[];
  private category: Category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    let prodCat = this.route.snapshot['url'].toString();
    this.products = this.postService.getPosts(prodCat);
    console.log(this.products);
    }

}
