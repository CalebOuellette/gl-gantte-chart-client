import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Task } from '../classes/task';
import { Channel } from '../classes/channel';
import * as _ from 'underscore';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  host: {'(window:scroll)': 'doSomething($event)'}
})
export class ChartComponent implements OnInit {



  public nowDate: Date = new Date(); //right now.

  public channels: FirebaseListObservable<any>; //list of channels 


  private dragging: boolean = false; //if there is something being dragged.
  private dragItem: Task; //the item being dragged.

  private last: MouseEvent; //last event to calc move distance


  public nowOffset: number = 325; //offset of the now point.

  public zoomScale: number = 1000000; //MS per Pixel

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 


  constructor(public projectService: ProjectService) {
       this.channels = projectService.channels;
    
  }


  ngOnInit() {
  }


  @HostListener('mouseup')
  onMouseup(event: MouseEvent) {
    this.dragging = false;
    this.dragItem = null;
    this.dragEventType = 0;
  }

  @HostListener('mouseleave')
  onMouseLeave(event: MouseEvent) {
    this.dragging = false;
    this.dragItem = null;
    this.dragEventType = 0;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging && this.dragEventType) {
      if (this.dragEventType == 1) {
        this.dragItem.totalTime = this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale);
        if (this.dragItem.totalTime < (this.zoomScale * 40)) {
          this.dragItem.totalTime = this.zoomScale * 40;
        } else {
    //      this.dragItem.parentChannel.adjusTasksAfter(this.dragItem, ((event.clientX - this.last.clientX) * this.zoomScale));
        }
        this.last = event;
      }
      else if (this.dragEventType == 2) {
        // this.dragItem.startDate = new Date(this.dragItem.startDate.getTime() - ((event.clientX - this.last.clientX) * this.zoomScale));
  //      this.dragItem.parentChannel.adjustAllTaskTimes(((event.clientX - this.last.clientX) * this.zoomScale));
        this.last = event;
      }
      else if (this.dragEventType == 3) {
        this.nowOffset = (this.nowOffset + (event.clientX - this.last.clientX));        
        this.last = event;
      }
    }
  }

   @HostListener('window:scroll', ['$event']) 
    doSomething(event) {
      // console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      
      console.log("Scroll Event", window.pageYOffset );
    }


  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {

  }

  public taskExpand(task: Task, event: MouseEvent) {
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
    this.dragEventType = 1;
    event.stopPropagation();
  }


  public taskMove(task: Task, event: MouseEvent) {
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
    this.dragEventType = 2;
    event.stopPropagation();
  }

  public timelineMove(event: MouseEvent) {
    this.dragging = true;
    this.last = event;
    this.dragEventType = 3;
    event.stopPropagation();
  }



  // public addTask(channel: Channel) {
  //   var date;
  //   if (channel.lastTask) {
  //     date = channel.lastTask.startDate.getTime;
  //   } else {
  //     date = new Date();
  //   }
  //   var t: Task = { id: 'D', color: "#005757", startDate: new Date(channel.lastTask.startDate.getTime() + channel.lastTask.totalTime + 1), totalTime: 345600000, parentChannel: channel };
  //   channel.addTask(t);
  // }

  public addChannel(channel: Channel) {
    this.channels.push(channel);
  }

}
