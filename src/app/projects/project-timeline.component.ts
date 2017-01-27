import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-timeline',
  template: `
    <div class="row">
      <div class="col-md-1 col-md-offset-1">
        <h4>2016</h4>
      </div>
      <div class="col-md-1">
        <h4>Septembris</h4>
      </div>
    </div>

    <div class="row col-md-8 col-md-offset-1">
      <table class="table" style="width:auto">
        <thead>
          <tr>
            <th class="col-md-2">Objekts</th>
            <th class="col-md-2">Pasuttitjas</th>
            <th class="col-md-2">Apraksts</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>Sūknu stacijas mārupē</td>
            <td>Grundfoss punps Latvia</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          </tr>
          <tr>
            <td>ŪAS Ķemenri</td>
            <td>RERE vide</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class ProjectTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
