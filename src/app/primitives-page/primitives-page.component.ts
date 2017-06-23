import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../gl-primitives';
@Component({
  selector: 'gl-primitives-page',
  templateUrl: './primitives-page.component.html',
  styleUrls: ['./primitives-page.component.css']
})
export class PrimitivesPageComponent implements OnInit {

  @ViewChild("myFirstModal") myModal: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
