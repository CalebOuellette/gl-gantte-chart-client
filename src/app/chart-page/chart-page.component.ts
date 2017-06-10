import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css'],
  providers: [ProjectService]
})
export class ChartpageComponent implements OnInit, OnDestroy {

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { 
    

  }

  public loadedProject;
  private sub: any;

  ngOnInit() {    

      this.sub = this.route.params.subscribe(params => {       
        this.projectService.loadProjectByID(params['id']);
      });      
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
