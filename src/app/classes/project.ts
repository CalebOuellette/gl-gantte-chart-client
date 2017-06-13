import { Channel } from './channel';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';


export class ProjectProps {
    public name: string;
    public tasks;
    public channel;
    public readers: {};   
    public writters: {};
    public isPublic: boolean; 
}


export class Project {


}