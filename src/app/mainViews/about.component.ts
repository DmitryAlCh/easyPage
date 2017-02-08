import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../shared/language-service";

@Component({
  selector: 'app-about',
  template: `
  <div class="jumbotron">
    <h1>Par kompāniju</h1>
    <h3>Tekošā valodā = {{lang}}</h3>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  private lang: string;
  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.lang = this.langService.getCurrentLanguage();
  }

}
