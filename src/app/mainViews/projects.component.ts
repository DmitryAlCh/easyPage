import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <div class="jumbotron">
      <h1>Projektu izpildes laiki (gadi)</h1>

    </div>
    <div class="row">
      <div class="col-md-2">
        <ul class="list-group">
          <li class="list-group-item"><a (click)="navigateToYear(2017)">2017</a><span class="badge">16</span></li>
          <li class="list-group-item"><a (click)="navigateToYear(2016)">2016</a><span class="badge">8</span></li>
          <li class="list-group-item"><a (click)="navigateToYear(2015)">2015</a><span class="badge">10</span></li>
          <li class="list-group-item"><a (click)="navigateToYear(2014)">2014</a><span class="badge">44</span></li>
          <li class="list-group-item"><a (click)="navigateToYear(2013)">2013</a><span class="badge">21</span></li>

        </ul>
      </div>
      <div class="col-md-8">
        <router-outlet></router-outlet>
      </div>

    </div>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  yearSelected:boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

  navigateToYear(year){
    console.log(this.yearSelected);
    if (this.yearSelected){
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate([year], {relativeTo: this.route});
    }
    this.yearSelected = true;
    console.log(this.yearSelected);
  }

}
