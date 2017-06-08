import { Channel } from './channel';

export class TaskProps{
  public id: string;  
  public color: string;
  public startDate: Date;
  public totalTime: number;
  public channelID?: Channel;
  public nextTaskID?: string;
  public preTaskID?: string;
}


export class Task{
  public id: string;  
  public color: string;
  public startDate: Date;
  public totalTime: number;
  public channelID?: Channel;
  public nextTaskID?: string;
  public preTaskID?: string;
}
