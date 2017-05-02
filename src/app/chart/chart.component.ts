import { Component, OnInit, HostListener } from '@angular/core';


export class Task{
  public id: string
  public  offset: number
  public width: number 
  public color: string
}

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public channels: Array<Task> = [{id: 'A', offset: 100,  width: 500, color: "#F2C94C"}, {id: 'B',  width: 200, offset: 50, color: "#F2994A"}, {id: 'C',  width: 300, offset: 120, color: "#EB5757"}];
  private dragging: boolean = false;
  private dragItem: Task;

  private last: MouseEvent;

  private offset: number = 400;  
  
  public nowOffset: number = 125;


  constructor() {

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
      this.dragItem.offset = this.dragItem.offset + ( event.clientX - this.last.clientX);
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
