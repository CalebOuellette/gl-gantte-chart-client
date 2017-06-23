import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarsComponent } from './loading-bars/loading-bars.component';
import { BarComponent } from './loading-bars/bar/bar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    ModalComponent,
    LoadingBarsComponent,
    BarComponent
  ],
  exports: [
    LoadingBarsComponent,
    ModalComponent,
  ]
})
export class GlPrimitivesModule { }
