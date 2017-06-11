import { Injectable } from '@angular/core';

import { ProjectProps, TaskProps, ChannelProps, UserProps } from '../classes';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  public PROJECTPATH: string = '/Projects/';
  public USERPATH: string = '/Users/';
  public projectid: string;
  public project: FirebaseObjectObservable<ProjectProps>;
  public channels: FirebaseListObservable<ChannelProps[]>;
  public tasks: FirebaseListObservable<TaskProps[]>;
  public isLoaded: boolean = false;
  public user: FirebaseObjectObservable<UserProps>;


  public userCanWrite: boolean;

  constructor(public fireDb: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

  public authByToken(id: string) {
    var token = this.afAuth.auth.createCustomToken(id);
    this.afAuth.auth.signInWithCustomToken(token);
  }


  public loadProjectByUserID(id: string) {
    this.afAuth.auth.signInAnonymously().then(() => {
      this.user = this.fireDb.object(this.USERPATH + id);
      this.user.subscribe((value: UserProps) => {
        if (value.projectID) {
          this.loadProjectByID(value.projectID);
        }
        this.userCanWrite = value.write;
      });
    });


  }

  public loadProjectByID(id: string) {
    this.project = this.fireDb.object(this.PROJECTPATH + id);
    this.channels = this.fireDb.list(this.PROJECTPATH + id + '/channels');
    this.tasks = this.fireDb.list(this.PROJECTPATH + id + '/tasks');
    this.projectid = id;
    this.isLoaded = true;
  }

}
