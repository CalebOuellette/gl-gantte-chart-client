import { Component, OnInit, HostListener } from '@angular/core';
import  { Task } from '../classes/task';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  public nowDate: Date = new Date();


  public channels: Array<Task> = [
    {id: 'A', color: "#F2C94C", startDate: new Date(), totalTime: 345600000},    
    {id: 'B', color: "#F2994A", startDate: new Date(), totalTime: 345600000},    
    {id: 'C', color: "#EB5757", startDate: new Date(), totalTime: 345600000},    
    ];

  private dragging: boolean = false;
  private dragItem: Task;

  private last: MouseEvent;

  private offset: number = 400;  
  
  public nowOffset: number = 125;

  public zoomScale: number = 1000000;

  constructor() {
    this.channels[0].startDate.setHours(this.channels[0].startDate.getHours() + 10);
    this.channels[1].startDate.setHours(this.channels[0].startDate.getHours() - 50);
    this.channels[2].startDate.setHours(this.channels[0].startDate.getHours() - 90);
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


  public addTask(channel: number){
    
  }

}
