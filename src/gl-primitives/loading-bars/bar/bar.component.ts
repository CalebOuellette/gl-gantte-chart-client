import { Component, OnInit, animate, transition, state, trigger, style, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  animations: [
    trigger('movebar', [
      state('start', style({
        left: '201px'
      })),
      state('end', style({
        left: '-101px'
      })),
      transition('start => end', animate('800ms ease-in')),
    ])
  ]
})
export class BarComponent implements OnInit {

  constructor() { }
  @Input() totalTime: number = 800;
  @Input() offset: number = 1000;
  @Input() color: Array<String> = ["#FF0000"];

  public colorPointer = 0;
  public barLenght = 100;

  ngOnInit() {
    
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
  private updateLength(){    
    this.barLenght  = Math.floor(Math.random() * 90) + 10;  
  }

  


}
