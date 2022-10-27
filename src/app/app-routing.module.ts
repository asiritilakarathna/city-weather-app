import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';

const routes: Routes = [
  { path: 'weather-main', component: WeatherMainComponent },
  { path: '', redirectTo: '/weather-main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
