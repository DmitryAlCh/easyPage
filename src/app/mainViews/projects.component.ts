import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="jumbotron">
      <h1>Projektu izpildes laiki (gadi)</h1>

    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
