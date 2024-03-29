import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PercentRoundPipe } from './pipes/percent-round/percent-round.pipe';
import { TopbarComponent } from './topbar/topbar.component';
import { ChartpageComponent } from './chart-page/chart-page.component';

import { GlPrimitivesModule } from '../gl-primitives/gl-primitives.module';

import { appRoutes } from './app.routes';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChartCreatePageComponent } from './chart-create-page/chart-create-page.component';
import { PrimitivesPageComponent } from './primitives-page/primitives-page.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FltrChannelIdPipe } from './pipes/fltr-channel-id/fltr-channel-id.pipe';
import { ChartChannelComponent } from './chart/chart-channel/chart-channel.component';
import { StringToDatePipe } from './pipes/string-to-date/string-to-date.pipe';
import { ChannelCreateComponent } from './chart/channel-create/channel-create.component';
import { TaskCreateComponent } from './chart/task-create/task-create.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TimeScaleComponent } from './chart/time-scale/time-scale.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PercentRoundPipe,
    TopbarComponent,
    ChartpageComponent,
    LandingPageComponent,
    ChartCreatePageComponent,
    PrimitivesPageComponent,
    TestPageComponent,
    FltrChannelIdPipe,
    ChartChannelComponent,    
    StringToDatePipe, ChannelCreateComponent, TaskCreateComponent, TaskInfoComponent, TimeScaleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GlPrimitivesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
