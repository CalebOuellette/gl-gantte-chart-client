import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading-bars',
  templateUrl: './loading-bars.component.html',
  styleUrls: ['./loading-bars.component.css']
})
export class LoadingBarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var s = (this.rows / 2) - (this.centeroffset);

    for (var i = 0; i < this.rows; i++) {
      if(i < s || i > s + this.centeroffset){
        this.numbers.push(Math.floor((Math.random() * 2000)));      
      }
      else{
        this.numbers.push(-1);      
      }
    }    
  }
  @Input() nowBar: boolean = true;
  @Input() centeroffset: number = 0;
  @Input() rows: number = 5;
  public numbers: Array<number> = [];

  @Input() public colors: Array<string> = [
    '#FF761A',
    '#FFD51E',
    '#03CEA4',
    '#00A1E4',
    '#454ADE',
  ]

  @Input() barHeight: number = 60;


  @Input() barLenght: number = 100;
  @Input() barLenghtmin: number = 50;
  @Input() barLenghtmax: number = 100;





}
