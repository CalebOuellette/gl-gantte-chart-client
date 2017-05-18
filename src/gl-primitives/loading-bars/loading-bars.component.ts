import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-bars',
  templateUrl: './loading-bars.component.html',
  styleUrls: ['./loading-bars.component.css']
})
export class LoadingBarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public colors: Array<string> = [
    '#FF761A',
    '#FFD51E',
    '#03CEA4',
    '#00A1E4',
    '#454ADE',
  ]

  public channels: number = 5;


}
