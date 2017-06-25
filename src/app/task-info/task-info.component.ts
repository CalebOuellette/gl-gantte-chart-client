import { Component, OnInit, Input } from '@angular/core';
import { TaskProps } from '../classes';
@Component({
  selector: 'gl-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css']
})
export class TaskInfoComponent implements OnInit {

  @Input() task: TaskProps;

  constructor() { }

  ngOnInit() {
  }



}
