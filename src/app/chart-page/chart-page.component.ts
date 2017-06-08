import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css'],
  providers: [ProjectService]
})
export class ChartpageComponent implements OnInit {

  constructor(private projectService: ProjectService) { 
    this.projectService.loadProjectByID("projectid");

  }

  public loadedProject;

  ngOnInit() {    
  }

}
