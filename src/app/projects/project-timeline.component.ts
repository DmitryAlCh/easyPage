import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { PostService } from "../shared/post-service";
import { Post } from "../shared/post-class";

@Component({
  selector: 'projects-timeline',
  template: `
    <table class="table table-striped">
      <thead>
        <th class="col-md-2">Projekta nosaukums</th>
        <th class="col-md-2">Pasūtītājs</th>
        <th class="col-md-8">Apraksts</th>
      </thead>
      <tbody>
        <tr *ngFor="let project of projects">
        <ng-container *ngIf="project.date===projectYear">
          <td>{{project.header}}</td>
          <td>{{project.imgPath}}</td>
          <td>{{project.mainText}}</td>
        </ng-container>
        </tr>
      </tbody>
    </table>

  `,
  styles: []
})
export class ProjectTimelineComponent implements OnInit, OnDestroy {
  private projectYear: string;
  private subscription: Subscription;
  private projects: Post[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }


  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.subscription = this.route.params.subscribe((params:any) => {
      // console.log(params['id']);
      this.projectYear = params['id'];
      this.projects = this.postService.getPosts('projects');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
