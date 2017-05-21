import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-chartpage',
  templateUrl: './chartpage.component.html',
  styleUrls: ['./chartpage.component.css'],
  providers: [ProjectService]
})
export class ChartpageComponent implements OnInit {

  constructor(private projectService: ProjectService) { 
    this.projectService.loadProjectByID("projectid");

  }

  public loadedProject;

  ngOnInit() {    
    this.loadedProject = this.projectService.project;
  }

}
