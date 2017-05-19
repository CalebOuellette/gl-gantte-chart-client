import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PercentRoundPipe } from './pipes/percent-round.pipe';
import { TopbarComponent } from './topbar/topbar.component';
import { ChartpageComponent } from './chartpage/chartpage.component';

import { GlPrimitivesModule } from '../gl-primitives/gl-primitives.module';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PercentRoundPipe,
    TopbarComponent,
    ChartpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GlPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
