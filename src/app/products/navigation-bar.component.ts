import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/category-class";
import { PostService } from "../shared/post-service";

@Component({
  selector: 'navigation-tree',
  template: `
  <div class="row">
    Navigation tree
  </div>
  `,
  styles: []
})
export class NavigationTree implements OnInit {
  private categories: Category[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.categories = this.postService.getCategoryList();
    //console.log(this.categories[0].category);
  }

}
