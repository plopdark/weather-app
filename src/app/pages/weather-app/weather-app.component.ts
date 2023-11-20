import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';
import { ThemeEnum } from 'src/app/utilities/enums/theme.enum';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss'],
})
export class WeatherAppComponent implements OnInit {
  public icon = 'assets/day-and-night.png';
  public themeImage = '';
  public cloudSunny = 'assets/cloud-sun.svg';
  public darkIcon = 'assets/moon.png';
  public snowflake = 'assets/snowflake.png';
  public flower = 'assets/flower.png';
  public leaf = 'assets/leaf.png';
  public cloudLighting = 'assets/cloud-lighting.png';
  public cloudRain = 'assets/cloud-rain.png';
  public cloudLightingSun = 'assets/cloud-lighting-sun.png';
  public cloudSunnyLittle = 'assets/cloud-sun-2.png';

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.updateThemeImage();
  }

  public updateThemeImage(): void {
    if (this.themeService.theme === ThemeEnum.Dark) {
      this.themeImage = 'assets/moon.png';
    } else {
      this.themeImage = 'assets/sun.png';
    }
  }

  public changeTheme(): void {
    this.themeService.changeTheme();
    this.updateThemeImage();
  }
}
