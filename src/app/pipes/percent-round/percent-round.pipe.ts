import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentRound'
})
export class PercentRoundPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    var num: number;
    if(value > 1){
      num = 1;
    }
    else if(value < 0){
      num = 0;
    }
    else{
      num = value;
    }


    return num;
  }

}
