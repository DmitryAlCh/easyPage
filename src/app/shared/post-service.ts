import { Injectable } from "@angular/core";

import { Post } from "./post-class";
import { Category } from "./category-class";

@Injectable()

export class PostService{
  private selectedProductId:  number;
  private selectedCategoryId: number;
  private loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  private loremIpsumRu:string = 'Мой дядя самых честных правил, Когда не в шутку занемог, Он уважать себя заставил. И лучше выдумать не мог. Его пример другим наука';
  private categories: Category[] =[
    new Category('energetics'),
    new Category('water'),
    new Category('other'),
  ];
  private posts: Post[] = [
    new Post('lv','CPTF', this.loremIpsum,'imagePath','energetics','2016','someLink',1),
    new Post('lv','Arteziska aka', this.loremIpsum,'imagePath','water','2016','someLink',2),
    new Post('lv','Xport', this.loremIpsum,'imagePath','other','2016','someLink',3),
    new Post('lv','QP_2062', this.loremIpsum,'imagePath','water','2016','someLink',4),
    new Post('lv','QP_2062', this.loremIpsum,'imagePath','energetics','2016','someLink',5),
    new Post('lv','KSS izbūve Siguldā', this.loremIpsum,'imagePath','projects','2016','someLink',6),
    new Post('lv','NAI Izbūve Ķegumā', this.loremIpsum,'imagePath','projects','2016','someLink',7),
    new Post('lv','Ielas apgaismojuma izbūve Jekabpilī', this.loremIpsum,'imagePath','projects','2015','someLink',8),
    new Post('ru','CPTF', this.loremIpsumRu,'imagePath','energetics','2016','someLink',1),
    new Post('ru','Arteziska aka', this.loremIpsumRu,'imagePath','water','2016','someLink',2),
    new Post('ru','Xport', this.loremIpsumRu,'imagePath','other','2016','someLink',3),
    new Post('ru','QP_2062', this.loremIpsumRu,'imagePath','water','2016','someLink',4),
    new Post('ru','QP_2062', this.loremIpsumRu,'imagePath','energetics','2016','someLink',5),
    new Post('ru','KSS izbūve Siguldā', this.loremIpsumRu,'imagePath','projects','2016','someLink',6),
    new Post('ru','NAI Izbūve Ķegumā', this.loremIpsumRu,'imagePath','projects','2016','someLink',7),
    new Post('ru','Ielas apgaismojuma izbūve Jekabpilī', this.loremIpsumRu,'imagePath','projects','2015','someLink',8),
  ];
  private notFoundPost = new Post(
    'lv','Product not found', '','','','','',999
  );


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
    if (exactPost){
      return exactPost;
    } else {
      return this.notFoundPost;
    }

  }

  getCategoryList(){
    return this.categories;
  }

  getYearRange(category){
    // Look through ALL POSTS and take year range and put them in an ARRAY
    // to be used in mainViews/projects.component as an <UL> element.
  }





}
