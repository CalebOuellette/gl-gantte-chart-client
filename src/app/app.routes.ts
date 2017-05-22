import { Routes } from '@angular/router';
import { ChartpageComponent } from '../app/chartpage/chartpage.component';


export const appRoutes: Routes = [
  { path: 'ChartPage', component: ChartpageComponent },
  { path: '',
    redirectTo: '/ChartPage',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];