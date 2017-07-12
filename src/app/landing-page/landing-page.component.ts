import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'gl-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public projectCode: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public projectCodeClick() {
    //check if good code
    //redirect to page.
    this.router.navigate(['/ChartPage/' + this.projectCode]);
  }

  public projectCodeChange(code: string) { 
    this.projectCode = code;
    if(code.length === 20){
        this.router.navigate(['/ChartPage/' + this.projectCode]);
    }
  }

}
