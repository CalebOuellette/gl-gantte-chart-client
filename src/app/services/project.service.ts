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


  public loadProjectByUserID(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.loadUser(id).then(() => {
        this.user.subscribe((value: UserProps) => {
          if (value.isCreated) {
            if (value.projectID) {
              this.userCanWrite = value.write;
              this.loadProjectByID(value.projectID).then(success => {
                resolve(true);
              }, fail => {
                reject("Error loading project");
              });
            }
          }
          else {
            reject("Error loading user");
            console.warn("Error loading User of id: " + id);
          }
        });
      });
    });
  }

  public loadProjectByID(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.projectid = id;
      this.project = this.fireDb.object(this.PROJECTPATH + id);
      this.project.subscribe((proj: ProjectProps) => {
        if (proj.isCreated) {
          this.isLoaded = true;
          this.channels = this.fireDb.list(this.PROJECTPATH + id + '/channels');
          this.tasks = this.fireDb.list(this.PROJECTPATH + id + '/tasks');
          resolve(true);
        } else {
          console.warn("Error loading Project of id: " + id);
          reject("Error loading");
        }
      });
    });
  }

  public loadUser(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInAnonymously().then(() => {
        this.user = this.fireDb.object(this.USERPATH + id);
        this.user.subscribe(success => {
          if (success.isCreated) {
            this.userCanWrite = success.write;            
            resolve(true);
          } else {
            reject("error loading user");
            console.warn("failed to load user id:" + id);
          }

        });

      }, fail => {
        reject("error loading user");
        console.warn("failed to load user id:" + id);
      });
    });
  }


  public createProject(proj: ProjectProps): Promise<string> {
    //TODO make one transaction
    //If some call fails we will end up with bad data
    return new Promise((resolve, reject) => {
      this.fireDb.list(this.PROJECTPATH).push(proj).then((success) => {
        this.loadProjectByID(success.key);
        this.createProjectUser(success.key, true).then(userID => {
          this.project.update({ writter: userID });
          this.loadUser(userID).then(success => {
            resolve(userID);
          });
        });
        this.createProjectUser(success.key, false).then(success => {
          this.project.update({ reader: success });
        });
      });
    });
  }

  public createProjectUser(projectID: string, writter: boolean): Promise<string> {
    return new Promise((resolve, reject) => {
      var user = new UserProps();
      user.isCreated = true;
      user.projectID = projectID;
      user.read = true;
      user.write = writter;

      this.fireDb.list(this.USERPATH).push(user).then((success) => {
        resolve(success.key);
      }, fail => {
        console.warn("Error creating user for project" + projectID);
        reject("Error creating user");
      });
    });
  }


}
