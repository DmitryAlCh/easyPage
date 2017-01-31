import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/category-class";
import { PostService } from "../shared/post-service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navigation-tree',
  template: `
  <nav class="breadcrumb">
    <a class="breadcrumb-item"
      *ngFor="let path of urlPath; let i = index;"
        >{{path[i]}}</a>
  </nav>
  `,
  styles: []
})
export class NavigationTree implements OnInit {
  private categories: Category[];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    ) { }
  private urlPath: string[] = [
    'products', 'energetics', '12'
  ];
  ngOnInit() {
    this.categories = this.postService.getCategoryList();
    console.log("navigation route: "+this.route.snapshot);
  }

}
