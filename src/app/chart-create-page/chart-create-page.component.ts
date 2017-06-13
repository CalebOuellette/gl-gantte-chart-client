import { Component, OnInit } from '@angular/core';
import { ProjectProps } from '../classes/project';
@Component({
  selector: 'gl-chart-create-page',
  templateUrl: './chart-create-page.component.html',
  styleUrls: ['./chart-create-page.component.css']
})
export class ChartCreatePageComponent implements OnInit {


  public projectName: string;

  constructor() { }

  ngOnInit() {
  }

  public createProject(){
    var p = new ProjectProps;
    p.name = this.projectName;
    p.isPublic = true;
    
  }

}
