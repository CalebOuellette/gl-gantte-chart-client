import { Component, OnInit, Input } from '@angular/core';
import { TaskProps } from '../classes';
@Component({
  selector: 'gl-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {

  @Input() task: TaskProps;

  public nowDate: Date;

  constructor() { }

  ngOnInit() {
    this.nowDate = new Date();

  }



}
