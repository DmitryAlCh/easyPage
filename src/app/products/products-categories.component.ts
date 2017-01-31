import { Component, OnInit } from '@angular/core';

import { Category } from "../shared/category-class";
import { PostService } from "../shared/post-service";

@Component({
  selector: 'products-categories',
  template: `
    <div class="row">
      <div class="col-md-4" *ngFor="let cat of categories; let i = index;">
        <h2>{{cat.category}}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <a role="button"
            [routerLink]="[cat.category]">Skatit vairak</a>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsCategoriesComponent implements OnInit {

  private categories: Category[];
  private selectedCategory: string;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.categories = this.postService.getCategoryList();
    }
  }
