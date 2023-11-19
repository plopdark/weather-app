import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [],
  providers: [WeatherService, ThemeService],
  declarations: [],
})
export class SharedModule {}
