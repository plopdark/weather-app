import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';
import { RoutingEnum } from './utilities/enums/routing.enum';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: RoutingEnum.home },
  { path: RoutingEnum.home, component: WeatherAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
