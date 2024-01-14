import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IDayPart } from 'src/app/utilities/interfaces/daypart.interface';
import { WeatherService } from '../../services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-day-part',
  templateUrl: './day-part.component.html',
  styleUrls: ['./day-part.component.scss', '../../../styles/weather.scss'],
})
export class DayPartComponent implements OnInit, OnDestroy {
  @Input() partBlock: IDayPart;
  public currentFirstHour: any;
  public currentSecondHour: any;
  public currentFirstImage: string = '';
  public currentSecondImage: string = '';
  public weatherSubscription: Subscription;

  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherSubscription = this.weatherService.triggerRequest
      .pipe()
      .subscribe(() => {
        this.currentFirstHour = this.weatherService.getHourlyWeather(
          this.partBlock.time[0]
        );
        this.currentSecondHour = this.weatherService.getHourlyWeather(
          this.partBlock.time[1]
        );
        this.currentFirstImage = this.weatherService.getWeatherIconByDay(
          this.currentFirstHour.condition.text
        );
        this.currentSecondImage = this.weatherService.getWeatherIconByDay(
          this.currentSecondHour.condition.text
        );
      });
  }

  ngOnDestroy(): void {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }
}
