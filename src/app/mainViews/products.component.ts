import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="jumbotron" id="productsJumbotron">
      <h1>Uzņēmuma produkcija</h1>
      <h2>SIA ZRA "ELLAT" ilglaicīgi uztur savu nelielu ražošanu ar iespiedplašu un mehāniski cehu</h2>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
