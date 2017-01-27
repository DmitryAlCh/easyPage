import { Component, OnInit } from '@angular/core';
import { Post } from "../shared/post-class";
import { PostService } from "../shared/post-service";

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
          role="button"
          (click)="setCurrentProduct(product.id)">Uzzinat vairāk..</a>
    </div>
  `,
  styles: []
})
export class EnergeticsComponent implements OnInit {
  private products: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
// returns an ARRAY
    this.products = this.postService.getPosts('energetics');
    console.log(this.products);
    }
   setCurrentProduct(id){
     this.postService.setCurrentProductId(id);
    }

}
