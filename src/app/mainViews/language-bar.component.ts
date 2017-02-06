import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'language-bar',
  template: `
  <ul class="nav navbar-nav navbar-right">
    <li class="nav-item">
      <a class="nav-link" [ngStyle]="{'font-weight': 'bold'}">LV</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" role="button">RU</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">EN</a>
    </li>
  </ul>
  `,
  styles: []
})
export class LanguageBarComponent implements OnInit {
  private selectedLanguage: string;
  constructor() { }

  ngOnInit() {
  }

  setLang(lang){
    this.selectedLanguage = lang;
  }

}
