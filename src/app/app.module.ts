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
import { ChartpageComponent } from './chartpage/chartpage.component';

import { GlPrimitivesModule } from '../gl-primitives/gl-primitives.module';

import { appRoutes } from './app.routes';

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
    GlPrimitivesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
