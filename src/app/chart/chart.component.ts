import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public channels: Array<any> = [{id: 'A', offset: 100,  width: 500, color: "#F2C94C"}, {id: 'B',  width: 200, offset: 50, color: "#F2994A"}, {id: 'C',  width: 300, offset: 120, color: "#EB5757"}];
  private dragging: boolean = false;
  private dragItem: any;

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
  onMousedown(event) {  
   
  }

  private taskSelect(task: any, event: MouseEvent) {    
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
  }

}
