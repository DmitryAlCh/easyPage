import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-timeline',
  template: `

    <ul class="list-group">
      <li class="list-group-item">
        <div class="col-md-3">
          <p>Kss Mārupe</p>
        </div>
        <div class="col-md-3">
          <p>Grundfoss pumps Latvia</p>
        </div>
        <div class="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </li>
      <li class="list-group-item">
        <div class="col-md-3">
          <p>LKSS Jelgava</p>
        </div>
        <div class="col-md-3">
          <p>Krabo SIA</p>
        </div>
        <div class="col-md-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </li>
    </ul>

  `,
  styles: []
})
export class ProjectTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
