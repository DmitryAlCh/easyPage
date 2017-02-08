import { Injectable } from "@angular/core";

@Injectable()


export class LanguageService{
  private currentLanguage:string = 'LV';
  constructor(){}

  getCurrentLanguage(){
    return this.currentLanguage;
  }

  setCurrentLanguage(lang: string){
    this.currentLanguage = lang;
  }


}
