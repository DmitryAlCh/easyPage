import { Injectable } from "@angular/core";

@Injectable()

export class customRouteService{
  constructor(){}
  //this wiil take a route as a url from router.url 'products/energetics'
  //it will split it and return as an array ['products', 'energetics']
  private currentUrlArr: string[];

  setCurrentUrl(){
    
  }

  splitUrl(url:string){
    var urlArray = url.split('/');
    return urlArray;
  }


}
