import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskProps } from '../../classes/task';
import { ChannelProps } from '../../classes/channel';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'gl-chart-channel',
  templateUrl: './chart-channel.component.html',
  styleUrls: ['./chart-channel.component.scss']
})
export class ChartChannelComponent implements OnInit {


  public nowDate: Date = new Date(); //right now.

  private dragging: boolean = false; //if there is something being dragged.
  private dragItem: any; //the item being dragged.

  private last: MouseEvent; //last event to calc move distance


  @Input() public nowOffset: number = 325; //offset of the now point.

  @Input() public zoomScale: number = 1000000; //MS per Pixel

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 

  public taskList: FirebaseListObservable<TaskProps[]>;



  @Input() channelID: string;

  public channel: FirebaseObjectObservable<ChannelProps>;

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



  @HostListener('window:mouseup')
  onMouseup(event: MouseEvent) {
    this.dragging = false;
    this.dragItem = null;
    this.dragEventType = 0;
  }

  @HostListener('window:mouseleave')
  onMouseLeave(event: MouseEvent) {
    this.dragging = false;
    this.dragItem = null;
    this.dragEventType = 0;
  }

  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging && this.dragEventType && this.projectService.userCanWrite) {
      var dbTask = this.projectService.fireDb.object(this.projectService.PROJECTPATH + this.projectService.projectid + '/tasks/' + this.dragItem.$key);
      if (this.dragEventType == 1) {
        dbTask.update({ totalTime: this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale)}); //update Server
        this.dragItem.totalTime = this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale); //update Local
        if (this.dragItem.totalTime < (this.zoomScale * 40)) {
          this.dragItem.totalTime = this.zoomScale * 40;
        } else {
          //   this.dragItem.parentChannel.adjusTasksAfter(this.dragItem, ((event.clientX - this.last.clientX) * this.zoomScale));
        }
        this.last = event;
      }
      else if (this.dragEventType == 2) {
         dbTask.update({ startDate: this.dragItem.startDate - ((event.clientX - this.last.clientX) * this.zoomScale)});
    
        this.dragItem.startDate = this.dragItem.startDate - ((event.clientX - this.last.clientX) * this.zoomScale);
        //   this.dragItem.parentChannel.adjustAllTaskTimes(((event.clientX - this.last.clientX) * this.zoomScale));
        this.last = event;
      }
      else if (this.dragEventType == 3) {
        this.nowOffset = (this.nowOffset + (event.clientX - this.last.clientX));
        this.last = event;
      }
    }
  }


  public taskExpand(task: TaskProps, event: MouseEvent) {
    this.dragItem = task;
    this.dragging = true;
    this.last = event;
    this.dragEventType = 1;
    event.stopPropagation();
  }


  public taskMove(task: TaskProps, event: MouseEvent) {
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



  public addTask(afterTask?: TaskProps) {    
    if(afterTask){

    }else{
      var t: TaskProps = { name: "new Name", color: "#005757", startDate: new Date().getTime(), totalTime: 345600000, channelID: this.channelID };
    }
  }


}
