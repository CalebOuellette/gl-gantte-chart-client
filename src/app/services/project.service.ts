import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {

  private PROJECTPATH = '/Projects/';

  
  constructor(private fireDb: AngularFireDatabase) {     
  }

  public project: any;


  public loadProjectByID(id: string){
     this.project = this.fireDb.object(this.PROJECTPATH + id);
  }

  public createProject(){
    let project = new Project();
  }  

}
