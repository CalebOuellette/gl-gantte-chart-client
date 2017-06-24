import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

  constructor() { }

  public lastColor: string;
  public colors: Array<string> = [
    'E25FFC',
    '6E5BEA',
    '5BC0EB',
    'FDE74C',
    '9BC53D',
    'E55934',
    'FA7921'];


  public getRandomHexColor(): string {
    let index = Math.floor((Math.random() * this.colors.length));
    if(this.colors[index] == this.lastColor){
      return this.getRandomHexColor();
    }else{
      return '#' + this.colors[index];
    }
  }


}
