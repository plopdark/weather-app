import { WeathreIconsEnum } from '../../utilities/enums/weather-icons.enum';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-main',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
})
export class WeatherMainComponent {
  public readonly icon = 'assets/day-and-night.png';
  public readonly cloudSunny = WeathreIconsEnum.CloudySunny;
  public readonly snowflake = 'assets/snowflake.png';
  public readonly flower = 'assets/flower.png';
  public readonly leaf = 'assets/leaf.png';
  public readonly cloudLighting = 'assets/cloud-lighting.png';
  public readonly cloudRain = WeathreIconsEnum.Rainy;
  public readonly cloudLightingSun = 'assets/cloud-lighting-sun.png';
  public readonly cloudSunnyLittle = 'assets/cloud-sun-2.png';

  constructor(
    public weatherService: WeatherService,
    private readonly router: Router
  ) {}

  public handleNavigate(): void {
    this.router.navigate(['/page']);
  }
}
