import { Task } from "./task";
import * as _ from 'underscore';
import { FirebaseObjectObservable } from 'angularfire2/database';



export class Channel {

    constructor(){}

    public tasks: Array<Task> = [];

    public currentTask: Task;

    public lastTask: Task;

    public id: string;

    public name: string;
    

    public adjustTaskTimes(adjustment: number, taskArray: Array<Task>) {
        taskArray.forEach((t: Task) => {
            t.startDate = new Date(t.startDate.getTime() + adjustment);
        });
    }

    public adjustAllTaskTimes(adjustment: number) {
        this.adjustTaskTimes(adjustment, this.tasks);
        this.setCurrentTask();
    }


    public adjusTasksAfter(pivotTask: Task, adjustment: number) {
        var taskArray = _.filter(this.tasks, (item: Task) => {
            if (item.startDate > pivotTask.startDate) {
                return true;
            }
        });
        this.adjustTaskTimes(adjustment, taskArray);

    }

    public getCurrentTask(): Task {
        return _.find(this.tasks, (item: Task) => {
            if (item.startDate < new Date() && (item.startDate.getTime() + item.totalTime) > new Date().getTime()) {
                return true;
            }
        });
    }

    public setCurrentTask() {
        this.currentTask = this.getCurrentTask();
        this.lastTask = this.tasks[this.tasks.length -1];
    }

    public addTask(t: Task){
        this.tasks.push(t);
        this.setCurrentTask();
    }


}