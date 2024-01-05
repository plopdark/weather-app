import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ThemeButtonComponent } from './components/theme-button/theme-button.component';
import { DayPartComponent } from './components/day-part/day-part.component';
import { CommonModule } from '@angular/common';
import { NextDaysComponent } from './components/next-days/next-days.component';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [WeatherService],
  declarations: [ThemeButtonComponent, DayPartComponent, NextDaysComponent],
  exports: [ThemeButtonComponent, DayPartComponent, NextDaysComponent],
})
export class SharedModule {}
