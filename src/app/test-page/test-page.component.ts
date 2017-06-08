import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'gl-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
  providers: [ProjectService]
})
export class TestPageComponent implements OnInit {

  constructor(public projectService: ProjectService) {
      this.projectService.loadProjectByID("projectid");
   }


  ngOnInit() {     
  }

  addChannel(){
    this.projectService.channels.push({name: "test"});
  }
  addTask(aChannelID: string ){
    this.projectService.tasks.push({name: "test", channelID: aChannelID});       
  }

  addStartDate(taskid: string){
    let task = this.projectService.fireDb.object( this.projectService.PROJECTPATH +  this.projectService.projectid + '/tasks/' + taskid);
    task.update({startdate: new Date()});
  }

}
