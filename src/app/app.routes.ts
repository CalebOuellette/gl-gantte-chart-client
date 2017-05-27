import { Routes } from '@angular/router';
import { ChartpageComponent } from '../app/chart-page/chart-page.component';
import { LandingPageComponent } from '../app/landing-page/landing-page.component';

export const appRoutes: Routes = [
  { path: 'ChartPage', component: ChartpageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'CreatePage', component: LandingPageComponent },
 
  //{ path: '**', component: PageNotFoundComponent }
];