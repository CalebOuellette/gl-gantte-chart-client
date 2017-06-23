import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {




  public _isShowing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public show(): void{
    this._isShowing = true;
  }

  public hide(): void{
    this._isShowing = false;
  }

  public toggle(): void{
    if(this._isShowing){
      this.hide();
    }else{
      this.show();
    }
  }

  public contentClick(event: Event){
    event.stopPropagation();
  }

}
