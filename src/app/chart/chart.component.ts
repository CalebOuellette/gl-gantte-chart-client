import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private channels: Array<any> = [{id: 'a', offset: 200, color: "#F2C94C"}, {id: 'b', offset: 500, color: "#F2994A"}, {id: 'c', offset: 340, color: "#EB5757"}];
  private dragging: boolean = false;
  private dragItem: any;

  private last: MouseEvent;

  private offset: number = 400;  
  
  constructor() {

  }


  ngOnInit() {
  }


  @HostListener('mouseup')
  onMouseup(event: MouseEvent) {
    console.log("mouseup");
    this.dragging = false;      
    this.dragItem = null;  
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    console.log("move");
    if (this.dragging) {
      this.dragItem.offset = this.dragItem.offset + ( event.clientX - this.last.clientX);
      this.last = event;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {  
   
  }

  private taskSelect(task: any, event: MouseEvent) {
    console.log("select");
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
  }

}
