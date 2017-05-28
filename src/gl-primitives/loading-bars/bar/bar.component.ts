import { Component, OnInit, animate, transition, state, trigger, style, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  animations: [
    trigger('movebar', [
      state('start', style({
        left: '200%'
      })),
      state('end', style({
        left: '-100%'
      })),
      transition('start => end', animate('800ms')),
    ])
  ]
})
export class BarComponent implements OnInit {


  public colorPointer: number = 0;
  @Input() totalTime: number = 800;
  @Input() offset: number = 1000;
  @Input() color: Array<String> = ["#FF0000"];
  @Input() barHeight: number = 60;


  public barLenght: number = 100;
  @Input() barLenghtmin: number = 50;
  @Input() barLenghtmax: number = 100;

  public showing = true;
  constructor() { }

  ngOnInit() {    
    if(this.offset == -1){
      this.showing = false;
    }
    setTimeout(() => {
      this.reset();
    }, this.offset);
  }

  public state: string = "start";

  private animate() {
    this.state = "end";

    setTimeout(() => {
      this.reset();
    }, this.totalTime);
  }

  private reset() {
    this.state = "start";
    this.updateColorPointer();
    this.updateLength();
    setTimeout(() => {
      this.animate();
    }, 30);
  }

  private updateColorPointer() {
    this.colorPointer = Math.floor(Math.random() * this.color.length);
  }
  private updateLength() {
    this.barLenght = Math.floor(Math.random() * (this.barLenghtmax - this.barLenghtmin)) + this.barLenghtmin;
  }




}
