import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {

  public PROJECTPATH: string = '/Projects/';
  public projectid: string;

  constructor(public fireDb: AngularFireDatabase) {
  }

  public project: FirebaseObjectObservable<any>;
  public channels: FirebaseListObservable<any>;
  public tasks: FirebaseListObservable<any>;

  public loadProjectByID(id: string) {
    this.project = this.fireDb.object(this.PROJECTPATH + id);
    this.channels = this.fireDb.list(this.PROJECTPATH + id + '/channels');
    this.tasks = this.fireDb.list(this.PROJECTPATH + id + '/tasks');
    this.projectid = id;
  }


}
