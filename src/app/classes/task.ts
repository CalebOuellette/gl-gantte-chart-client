import { Channel } from './channel';
export class Task{
  public id: string;  
  public color: string;
  public startDate: Date;
  public totalTime: number;
  public parentChannel?: Channel;
  public nextTaskID?: string;
  public preTaskID?: string;
}
