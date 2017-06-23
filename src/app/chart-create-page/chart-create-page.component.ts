import { Component, OnInit } from '@angular/core';
import { ProjectProps } from '../classes/project';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-chart-create-page',
  templateUrl: './chart-create-page.component.html',
  styleUrls: ['./chart-create-page.component.css']
})
export class ChartCreatePageComponent implements OnInit {


  public projectName: string;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
  }

  public createProject(){
    var p = new ProjectProps();
    p.name = this.projectName;
    p.isPublic = true;
    p.isCreated = true;
    this.projectService.createProject(p).then((success)=>{
      this.router.navigate(['/ChartPage/']);
    }, fail=>{

    });
  }

}
