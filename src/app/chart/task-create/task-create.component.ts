import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProjectService, ColorService } from '../../services';
import { TaskProps } from '../../classes/task';
@Component({
  selector: 'gl-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public task: TaskProps = new TaskProps();
  @Input() channelID: string;
  @Output() public onChannelCreate: EventEmitter<string> = new EventEmitter();

  public hours: number;
  public startDate: string;
  constructor(public projectService: ProjectService,  public colorService: ColorService) { }

  ngOnInit() {
    this.task = new TaskProps();
    this.task.color = '#' + this.colorService.colors[0];
  }

  public selectColor(color: string){
    this.task.color = '#' + color;
  }

  public addTask(): void{    
    if(this.projectService.isLoaded){
      this.task.totalTime = this.hours * 60 * 60 * 1000;
      this.task.startDate = new Date(this.startDate).getTime();
      this.task.channelID = this.channelID;            
      this.projectService.tasks.push(this.task).then(success =>{ //push to project
        this.onChannelCreate.emit(success.key); //emmit change
        this.ngOnInit(); //reset component.
      });
    }      
  }

}
