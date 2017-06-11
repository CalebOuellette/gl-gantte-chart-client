import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css'],
  providers: [ProjectService]
})
export class ChartpageComponent implements OnInit, OnDestroy {

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) {


  }

  public loadedProject;
  private sub: any;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.projectService.loadProjectByUserID(params['id']);
      }
      else {
        this.router.navigate(['']);
      }

    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
