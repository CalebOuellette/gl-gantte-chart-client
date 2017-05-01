import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private channels: Array<string> = ['a', 'b', 'c'];
  private dragging: boolean = false;
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
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    console.log("move");
    if (this.dragging) {
      this.offset = this.offset + ( event.clientX - this.last.clientX);
      this.last = event;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event) {
  //  this.dragging = true;
   
  }

  private taskSelect(task: string, event: MouseEvent) {
    console.log("select");
    this.dragging = true;
    this.last = event;
  }

}
