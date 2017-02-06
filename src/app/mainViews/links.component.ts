import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="jumbotron">
      <h1>Uzņēmumi ar ilggadīgo sadarbību</h1>

    </div>
    <div class="jumbotron">
      <h4>Interaktīva Latvijas karte ar pasūtītajiem</h4>
    </div>
  `,
  styles: []
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
