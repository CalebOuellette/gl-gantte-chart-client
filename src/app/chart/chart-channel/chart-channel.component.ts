import { Component, Input, OnInit, HostListener, ViewChild } from '@angular/core';
import { ProjectService } from '../../services';
import { TaskProps } from '../../classes/task';
import { ChannelProps } from '../../classes/channel';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ModalComponent } from '../../../gl-primitives';


@Component({
  selector: 'gl-chart-channel',
  templateUrl: './chart-channel.component.html',
  styleUrls: ['./chart-channel.component.scss']
})
export class ChartChannelComponent implements OnInit {


  @ViewChild("channelCreateModal") channelCreateModal: ModalComponent;

  public nowDate: Date = new Date(); //right now.

  private dragging: boolean = false; //if there is something being dragged.
  private dragItem: any; //the item being dragged.
  private dragItemDB: FirebaseObjectObservable<TaskProps>;
  private last: MouseEvent; //last event to calc move distance


  @Input() public nowOffset: number = 325; //offset of the now point.

  @Input() public zoomScale: number = 1000000; //MS per Pixel

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 

  public taskList: FirebaseListObservable<TaskProps[]>;



  @Input() channelID: string;

  public channel: FirebaseObjectObservable<ChannelProps>;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.channel = this.projectService.fireDb.object(this.projectService.PROJECTPATH + this.projectService.projectid + '/channels/' + this.channelID);
    this.taskList = this.projectService.fireDb.list(this.projectService.PROJECTPATH + this.projectService.projectid + '/tasks', {
      query: {
        orderByChild: 'channelID',
        equalTo: this.channelID
      }
    });
  }



  @HostListener('window:mouseup')
  onMouseup(event: MouseEvent) {
    if (this.dragItem) {      
      this.syncTaskPosition(this.dragItem);
      this.dragItem = null;
    }

    this.dragging = false;

    this.dragEventType = 0;
  }

  @HostListener('window:mouseleave')
  onMouseLeave(event: MouseEvent) {
    if (this.dragItem) {
      this.syncTaskPosition(this.dragItem);
      this.dragItem = null;
    }
    this.dragging = false;
    this.dragEventType = 0;
  }



  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging && this.dragEventType && this.projectService.userCanWrite) {

      if (this.dragEventType == 1) {

        let newTime = this.dragItem.totalTime + ((event.clientX - this.last.clientX) * this.zoomScale);

        this.dragItem.totalTime = newTime; //update Local        
        if (this.dragItem.totalTime < (this.zoomScale * 40)) {
          this.dragItem.totalTime = this.zoomScale * 40;
        }
        this.last = event;
      }
      else if (this.dragEventType == 2) {
        let newTime = this.dragItem.startDate + ((event.clientX - this.last.clientX) * this.zoomScale);
        this.dragItem.startDate = newTime;
        this.last = event;
      }
      else if (this.dragEventType == 3) {
        this.nowOffset = (this.nowOffset + (event.clientX - this.last.clientX));
        this.last = event;
      }
    }
  }

  public syncTaskPosition(task: any) {
    let db = this.projectService.fireDb.object(this.projectService.PROJECTPATH + this.projectService.projectid + '/tasks/' + this.dragItem.$key);
    db.update({ startDate: this.dragItem.startDate, totalTime: this.dragItem.totalTime });
    console.log("update saved")
  }

  public beginTaskDragEvent(task: TaskProps) {
    this.dragItem = task;
    this.dragging = true;
  }


  public taskExpand(task: TaskProps, event: MouseEvent) {
    this.beginTaskDragEvent(task);
    this.last = event;
    this.dragEventType = 1;
    event.stopPropagation();
  }


  public taskMove(task: TaskProps, event: MouseEvent) {
    this.beginTaskDragEvent(task);
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




}
