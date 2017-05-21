import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {

  constructor(db: AngularFireDatabase) { 

  }

  public project: Project;


  public loadProjectByID(id: string){

  }

  public createProject(){
    let project = new Project();

    

  }



}
