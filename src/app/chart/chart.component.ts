import { Component, OnInit, HostListener } from '@angular/core';
import { Task } from '../classes/task';
import { Channel } from '../classes/channel';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  public nowDate: Date = new Date();

  public channels: Array<Channel> = [];



  public channelsB: Array<Task> = [
    { id: 'A', color: "#F2C94C", startDate: new Date(), totalTime: 345600000 },
    { id: 'B', color: "#F2994A", startDate: new Date(), totalTime: 345600000 },
    { id: 'C', color: "#EB5757", startDate: new Date(), totalTime: 345600000 },
  ];

  private dragging: boolean = false;
  private dragItem: Task;

  private last: MouseEvent;

  private offset: number = 400;

  public nowOffset: number = 125;

  public zoomScale: number = 1000000;

  public dragEventType: number = 0;


  constructor() {
    var c = new Channel;
    c.tasks = [
      { id: 'A', color: "#F2C94C", startDate: new Date(), totalTime: 345600000 },
      { id: 'B', color: "#F2994A", startDate: new Date(), totalTime: 345600000 }
    ];
    this.channels.push(c);
      var c2 = new Channel;

      c2.tasks = [
         { id: 'C', color: "#EB5757", startDate: new Date(), totalTime: 345600000 }
      ]
          this.channels.push(c2);


    this.channels[0].tasks[1].startDate.setHours(this.channels[0].tasks[1].startDate.getHours() - 100);
    
  }


  ngOnInit() {
  }


  @HostListener('mouseup')
  onMouseup(event: MouseEvent) {
    this.dragging = false;
    this.dragItem = null;
    this.dragEventType = 0;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging && this.dragEventType) {
      if (this.dragEventType == 1) {
        this.dragItem.totalTime = this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale);
        this.last = event;
      }
      else if (this.dragEventType == 2) {
        this.dragItem.startDate = new Date(this.dragItem.startDate.getTime() - ((event.clientX - this.last.clientX) * this.zoomScale));
        this.last = event;
      }
    }
  }



  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {

  }

  public taskExpand(task: Task, event: MouseEvent) {
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
    this.dragEventType = 1;
  }


  public taskMove(task: Task, event: MouseEvent) {
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
    this.dragEventType = 2;
  }

  public addTask(channel: number) {

  }

}
