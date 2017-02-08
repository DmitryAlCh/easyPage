import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../shared/language-service";

@Component({
  selector: 'language-bar',
  template: `
  <ul class="nav navbar-nav navbar-right">
    <li class="nav-item">
      <a class="nav-link" [ngClass]="{active: LvClicked}" (click)="setLang('LV')">LV</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [ngClass]="{active: RuClicked}" (click)="setLang('RU')">RU</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [ngClass]="{active: EnClicked}" (click)="setLang('EN')">EN</a>
    </li>
  </ul>
  `,
  styles: [`
    .active{
      font-weight:bold;
      border: solid 1px silver;
    }
    `]
})
export class LanguageBarComponent implements OnInit {
  private selectedLanguage: string;
  private LvClicked: boolean = true;
  private EnClicked: boolean = false;
  private RuClicked: boolean = false;

  constructor(private langService: LanguageService) { }

  ngOnInit() {
  }

  setLang(lang){
    switch (lang) {
      case 'LV':
        this.langService.setCurrentLanguage('LV');
        this.LvClicked = true;
        this.EnClicked = false;
        this.RuClicked = false;
        break;
      case 'RU':
        this.langService.setCurrentLanguage('RU');
        this.LvClicked = false;
        this.EnClicked = false;
        this.RuClicked = true;
        break;
      case 'EN':
        this.langService.setCurrentLanguage('EN');
        this.LvClicked = false;
        this.EnClicked = true;
        this.RuClicked = false;
        break;
      default:
        this.LvClicked = true;
        this.EnClicked = false;
        this.RuClicked = false;
        break;
    }
  }

}
