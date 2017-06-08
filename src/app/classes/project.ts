import { Channel } from './channel';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';


class ProjectProps {
    public name;
    public tasks;
}


export class Project {


    constructor() {
    }
    public data: FirebaseObjectObservable<ProjectProps>;    
    public channels: FirebaseListObservable<ProjectProps>;
    public tasks: FirebaseListObservable<ProjectProps>;

}