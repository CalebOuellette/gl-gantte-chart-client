import { Component, OnInit, HostListener } from '@angular/core';
import  { Task } from '../classes/task';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public channels: Array<Task> = [
    {id: 'A',   width: 500, offset: 100, color: "#F2C94C", startDate: new Date(), totalTime: 345600000},    
    ];

  private dragging: boolean = false;
  private dragItem: Task;

  private last: MouseEvent;

  private offset: number = 400;  
  
  public nowOffset: number = 125;

  public zoomScale: number = 1000000;

  public nowDate: Date = new Date();

  constructor() {
    this.channels[0].startDate = new Date(this.channels[0].startDate.setHours(this.channels[0].startDate.getHours() + 10));
  }


  ngOnInit() {
  }


  @HostListener('mouseup')
  onMouseup(event: MouseEvent) {    
    this.dragging = false;      
    this.dragItem = null;  
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {    
    if (this.dragging) {
      this.dragItem.totalTime = this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale) ;
      this.last = event;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {  
   
  }

  private taskSelect(task: Task, event: MouseEvent) {    
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
  }

}
