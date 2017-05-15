import { Component, OnInit, HostListener } from '@angular/core';
import { Task } from '../classes/task';
import { Channel } from '../classes/channel';
import * as _ from 'underscore';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {



  public nowDate: Date = new Date(); //right now.

  public channels: Array<Channel> = []; //list of channels 

  private dragging: boolean = false; //if there is something being dragged.
  private dragItem: Task; //the item being dragged.

  private last: MouseEvent; //last event to calc move distance


  public nowOffset: number = 125; //offset of the now point.

  public zoomScale: number = 1000000; //MS per Pixel

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 


  constructor() {
    var c = new Channel();
    c.tasks = [
      { id: 'A', color: "#F2C94C", startDate: new Date(), totalTime: 345600000, parentChannel: c },
      { id: 'B', color: "#F2994A", startDate: new Date(), totalTime: 345600000, parentChannel: c }
    ];
    c.id = "1234";
    c.setCurrentTask();
    this.channels.push(c);
      var c2 = new Channel();
        c2.id = "12345";
      c2.tasks = [
         { id: 'C', color: "#EB5757", startDate: new Date(), totalTime: 345600000, parentChannel: c2 }
      ]
       c2.setCurrentTask();
          this.channels.push(c2);


    this.channels[0].tasks[1].startDate.setHours(this.channels[0].tasks[1].startDate.getHours() + 100);
    
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
        if(this.dragItem.totalTime < (this.zoomScale * 40)){
          this.dragItem.totalTime = this.zoomScale * 40;
        }else{
          this.dragItem.parentChannel.adjusTasksAfter(this.dragItem, ((event.clientX - this.last.clientX) * this.zoomScale));
        }

        
        this.last = event;
      }
      else if (this.dragEventType == 2) {
       // this.dragItem.startDate = new Date(this.dragItem.startDate.getTime() - ((event.clientX - this.last.clientX) * this.zoomScale));
        this.dragItem.parentChannel.adjustAllTaskTimes(((event.clientX - this.last.clientX) * this.zoomScale));
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

  public addTask(channel: Channel) {
    var date = channel.lastTask.startDate.getTime

    var t: Task =   { id: 'D', color: "#005757", startDate: new Date(channel.lastTask.startDate.getTime() + channel.lastTask.totalTime + 1), totalTime: 345600000, parentChannel: channel };


    channel.addTask(t);
  }

}
