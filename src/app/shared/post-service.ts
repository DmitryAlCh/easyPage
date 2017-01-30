import { Injectable } from "@angular/core";

import { Post } from "./post-class";
import { Category } from "./category-class";

@Injectable()

export class PostService{
  private selectedProductId:  number;
  private selectedCategoryId: number;
  private loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  private categories: Category[] =[
    new Category('energetics'),
    new Category('water'),
    new Category('other'),
  ];
  private posts: Post[] = [
    new Post('CPTF', this.loremIpsum,'imagePath','energetics','2016','someLink',1),
    new Post('Arteziska aka', this.loremIpsum,'imagePath','water','2016','someLink',2),
    new Post('Xport', this.loremIpsum,'imagePath','other','2016','someLink',3),
    new Post('QP_2062', this.loremIpsum,'imagePath','water','2016','someLink',4),
    new Post('QP_2062', this.loremIpsum,'imagePath','energetics','2016','someLink',5),
  ];



  constructor(){}

  getPosts(category){
    var filtered_arr = this.posts.filter((post) => {
      return post.category===category;
    });
    return filtered_arr;
  }

  getExactPost(postId){
    var exactPost = this.posts.find((post) => {
      return post.id===postId;
    });
    return exactPost;
  }

  setCurrentProductId(id){
    this.selectedProductId = id;
    console.log('current product ID:', id);
    return;
  }
  getCurrentProductId(){
    return this.selectedProductId;
  }

  getCategoryList(){
    return this.categories;
  }
  setSelectedCategory(id){
    // console.log(id, typeof id);
    this.selectedCategoryId = id;
  }

  getSelectedCatedory(){
    // console.log(this.selectedProductId, typeof this.selectedProductId);
    // console.log(this.categories);
    return this.categories[this.selectedCategoryId];
  }



}
