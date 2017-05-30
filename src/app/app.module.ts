import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PercentRoundPipe } from './pipes/percent-round.pipe';
import { TopbarComponent } from './topbar/topbar.component';
import { ChartpageComponent } from './chart-page/chart-page.component';

import { GlPrimitivesModule } from '../gl-primitives/gl-primitives.module';

import { appRoutes } from './app.routes';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChartCreatePageComponent } from './chart-create-page/chart-create-page.component';
import { PrimitivesPageComponent } from './primitives-page/primitives-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PercentRoundPipe,
    TopbarComponent,
    ChartpageComponent,
    LandingPageComponent,
    ChartCreatePageComponent,
    PrimitivesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GlPrimitivesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
