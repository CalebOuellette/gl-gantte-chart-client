import { Routes } from '@angular/router';
import { ChartpageComponent } from './chart-page/chart-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChartCreatePageComponent } from './chart-create-page/chart-create-page.component';
export const appRoutes: Routes = [
  { path: 'ChartPage', component: ChartpageComponent },
  { path: 'CreatePage', component: ChartCreatePageComponent },
  { path: 'LandingPage', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },
  //{ path: '**', component: PageNotFoundComponent }
];