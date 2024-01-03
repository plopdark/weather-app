import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { RoutingEnum } from './utilities/enums/routing.enum';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: RoutingEnum.Home },
  { path: RoutingEnum.Home, component: WeatherMainComponent },
  { path: 'page', component: WeatherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
