import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ChannelProps } from '../../classes/channel';

@Component({
  selector: 'gl-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent implements OnInit {

 
  public channel: ChannelProps;
  
  @Output() public onChannelCreate: EventEmitter<string> = new EventEmitter();

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.channel = new ChannelProps();
  }

  public addChannel(): void{    
    if(this.projectService.isLoaded){
         
      this.projectService.channels.push(this.channel).then(success =>{
        this.onChannelCreate.emit(success.key);
      });
    }      
  }

}
