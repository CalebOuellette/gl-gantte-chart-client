import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Task } from '../../classes/task';
import { Channel } from '../../classes/channel';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'gl-chart-channel',
  templateUrl: './chart-channel.component.html',
  styleUrls: ['./chart-channel.component.scss']
})
export class ChartChannelComponent implements OnInit {


  public nowDate: Date = new Date(); //right now.



  private dragging: boolean = false; //if there is something being dragged.
  private dragItem: Task; //the item being dragged.

  private last: MouseEvent; //last event to calc move distance


  @Input() public nowOffset: number = 325; //offset of the now point.

  @Input() public zoomScale: number = 1000000; //MS per Pixel

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 

  public taskList: FirebaseListObservable<any>;



  @Input() channelID: string;

  public channel: FirebaseObjectObservable<any>;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {

    this.channel = this.projectService.fireDb.object(this.projectService.PROJECTPATH + this.projectService.projectid + '/chennels/' + this.channelID);

    this.taskList = this.projectService.fireDb.list(this.projectService.PROJECTPATH + this.projectService.projectid + '/tasks', {
      query: {
        orderByChild: 'channelID',
        equalTo: this.channelID
      }
    });


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
       //   this.dragItem.parentChannel.adjusTasksAfter(this.dragItem, ((event.clientX - this.last.clientX) * this.zoomScale));
        }
        this.last = event;
      }
      else if (this.dragEventType == 2) {
        // this.dragItem.startDate = new Date(this.dragItem.startDate.getTime() - ((event.clientX - this.last.clientX) * this.zoomScale));
     //   this.dragItem.parentChannel.adjustAllTaskTimes(((event.clientX - this.last.clientX) * this.zoomScale));
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

    console.log("Scroll Event", window.pageYOffset);
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



  public addTask(channel: Channel) {
    var date;
    if (channel.lastTask) {
      date = channel.lastTask.startDate.getTime;
    } else {
      date = new Date();
    }
    var t: Task = { id: 'D', color: "#005757", startDate: new Date(channel.lastTask.startDate.getTime() + channel.lastTask.totalTime + 1), totalTime: 345600000, channelID: this.channelID };
    channel.addTask(t);
  }


}
