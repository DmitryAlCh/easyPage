import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../shared/language-service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  template: `
  <div class="jumbotron">
    <ng-container *ngIf="lang === 'LV'">
      <h1>Par kompāniju</h1>
      <h3>Tekošā valoda = {{lang}}</h3>
    </ng-container>
    <ng-container *ngIf="lang === 'RU'">
      <h1>О компании</h1>
      <h3>Текущий язык = {{lang}}</h3>
    </ng-container>
    <ng-container *ngIf="lang === 'EN'">
      <h1>About the company</h1>
      <h3>Current language = {{lang}}</h3>
    </ng-container>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  private lang: string;
  subscritpion: Subscription;

  constructor(private langService: LanguageService) {
    this.subscritpion = langService.lang$.subscribe(
      // SAME lang as in language servise .next(lang)
      lang => {
        console.log('current language is '+lang);
        this.lang = lang;
      }
    );
  }

  ngOnInit() {
    this.lang = this.langService.getCurrentLanguage();
  }





}
