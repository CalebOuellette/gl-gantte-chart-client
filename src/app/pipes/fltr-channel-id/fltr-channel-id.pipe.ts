import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fltrChannelId'
})
export class FltrChannelIdPipe implements PipeTransform {

  transform(tasks: any[], args?: any): any {
    return tasks.filter(task => {      
      return  task.channelID == args;
    });    
  }
}
