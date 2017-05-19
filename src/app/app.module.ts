import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PercentRoundPipe } from './pipes/percent-round.pipe';
import { TopbarComponent } from './topbar/topbar.component';
import { ChartpageComponent } from './chartpage/chartpage.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
