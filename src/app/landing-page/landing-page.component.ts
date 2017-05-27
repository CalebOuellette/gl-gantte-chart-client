import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public projectCode: string = "";

  constructor() { }

  ngOnInit() {
  }

  
}
