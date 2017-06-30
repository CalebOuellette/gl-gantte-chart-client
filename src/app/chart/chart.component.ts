import { Component, OnInit, HostListener, ViewEncapsulation, ViewChild } from '@angular/core';
import { TaskProps } from '../classes/task';
import { ChannelProps } from '../classes/channel';
import * as _ from 'underscore';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ModalComponent } from '../../gl-primitives';

@Component({
  selector: 'gl-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  host: {'(window:scroll)': 'doSomething($event)'}
})
export class ChartComponent implements OnInit {

  @ViewChild("channelCreateModal") channelCreateModal: ModalComponent;
  @ViewChild("linksModal") linksModal: ModalComponent;

  public nowDate: Date = new Date(); //right now.

  public channels: FirebaseListObservable<ChannelProps[]>; //list of channels 

  public dragging: boolean = false; //if there is something being dragged.
  
  private last: MouseEvent; //last event to calc move distance



  private _defaultNowOffset = 325;
  public nowOffset: number = this._defaultNowOffset; //offset of the now point.

  public zoomScale: number = 1000000; //MS per Pixel http://demo.ganttelope.com/ChartPage/-KnMo0iGeWpmOD-LkKnY

  private zoomMin: number = 25000000; //most zoomed out
  private zoomMax: number = 1600; //most zoomed in

  public dragEventType: number = 0; //TODO make an enum. this is the type of dragg happening. 


  constructor(public projectService: ProjectService) {
       this.channels = projectService.channels;    
  }


  ngOnInit() {
  }

  private zoomSpeed: number = 1.1;
  
  @HostListener('mousewheel', ['$event'])
  onWheel(event: WheelEvent) {
   if(event.deltaY < 0){
     if((this.zoomScale / this.zoomSpeed) > 1600){
      this.zoomScale = this.zoomScale / this.zoomSpeed;
     }    
   }else if(event.deltaY > 0){
    if((this.zoomScale * this.zoomSpeed) < 25000000){
      this.zoomScale = this.zoomScale * this.zoomSpeed;
     }
   }
   console.log(this.zoomScale);
  }


  @HostListener('window:mouseup')
  onMouseup(event: MouseEvent) {
    this.dragging = false;
   
    this.dragEventType = 0;
  }

@HostListener('window:"dragend"')
  onDragend(event: DragEvent) {
    this.dragging = false;   
    this.dragEventType = 0;
  }

  

  @HostListener('window:mouseleave')
  onMouseLeave(event: MouseEvent) {
    this.dragging = false;
   
    this.dragEventType = 0;
  }

  @HostListener('window:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if (this.dragging && this.dragEventType) {     
      if (this.dragEventType == 3) {
        

        this.nowOffset = this.nowOffset + ((event.clientX - this.last.clientX) * this.zoomScale);        
        this.last = event;
      }
    }
  }

  public timelineMove(event: MouseEvent) {
    this.dragging = true;
    this.last = event;
    this.dragEventType = 3;
    event.stopPropagation();
  }

  public addChannel(channel: ChannelProps) {
    this.channels.push(channel);
  }

  public returnToNow(){
    this.nowOffset = this._defaultNowOffset;
  }

}
