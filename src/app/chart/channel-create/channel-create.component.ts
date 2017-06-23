import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ChannelProps } from '../../classes/channel';

@Component({
  selector: 'gl-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent implements OnInit {

  public name: string;
  
  @Output() public onChannelCreate: EventEmitter<string> = new EventEmitter();

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

  public addChannel(): void{    
    if(this.projectService.isLoaded){
      var c = new ChannelProps();
      c.name = this.name;      
      this.projectService.channels.push(c).then(success =>{
        this.onChannelCreate.emit(success.key);
      });
    }      
  }

}
