import { Routes } from '@angular/router';
import { ChartpageComponent } from './chart-page/chart-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChartCreatePageComponent } from './chart-create-page/chart-create-page.component';
import { PrimitivesPageComponent } from './primitives-page/primitives-page.component';
import { TestPageComponent } from './test-page/test-page.component';
export const appRoutes: Routes = [
  { path: 'ChartPage/:id', component: ChartpageComponent },
  { path: 'ChartPage', component: ChartpageComponent },
  { path: 'CreatePage', component: ChartCreatePageComponent },
  { path: 'LandingPage', component: LandingPageComponent },
  { path: 'Primitives', component: PrimitivesPageComponent },
  { path: 'Test', component: TestPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: LandingPageComponent }
];