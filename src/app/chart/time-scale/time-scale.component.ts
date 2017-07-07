import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gl-time-scale',
  templateUrl: './time-scale.component.html',
  styleUrls: ['./time-scale.component.css']
})
export class TimeScaleComponent implements OnInit {

  @Input() nowOffset: number;
  @Input() zoomScale: number;

  public markCount: Array<number> = [1, 2, 3, 4, 5];


  constructor() { }

  ngOnInit() {
  }

}
