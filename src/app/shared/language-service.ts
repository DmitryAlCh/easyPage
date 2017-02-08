import { Injectable } from "@angular/core";

import { Subject } from 'rxjs/Subject';

@Injectable()


export class LanguageService{
  private currentLanguage:string = 'LV';
  constructor(){}

  getCurrentLanguage(){
    return this.currentLanguage;
  }

  private lang = new Subject<string>();
  lang$ = this.lang.asObservable();

  setCurrentLanguage(lang: string){
    // console.log('setCurrentLanguage called');
    this.currentLanguage = lang;
    this.lang.next(lang); //we pass lang and emit it.

  }



}
