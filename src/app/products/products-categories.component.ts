import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-categories',
  template: `
      <div class="row">
      <div class="col-md-4">
        <h2>Energetika</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <a role="button" [routerLink]="['energetics']">Skatit vairak</a>
      </div>
      <div class="col-md-4">
        <h2>Udenssaimnieciba</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <a role="button" [routerLink]="['water']">Skatit vairak</a>
      </div>
      <div class="col-md-4">
        <h2>Citi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <a role="button" [routerLink]="['other']">Skatit vairak</a>
      </div>
    </div>
  `,
  styles: []
})
export class ProductsCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
