import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarsComponent } from './loading-bars/loading-bars.component';
import { BarComponent } from './loading-bars/bar/bar.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    
    LoadingBarsComponent,
    BarComponent
  ],
  exports: [
    LoadingBarsComponent
  ]
})
export class GlPrimitivesModule { }
