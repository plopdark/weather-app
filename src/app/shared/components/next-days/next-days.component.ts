import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { INextDays } from 'src/app/utilities/interfaces/nextdays.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss'],
})
export class NextDaysComponent implements OnInit {
  @Input() forecastData: INextDays;
  public day: any;
  public formattedDayWeekOne: string;
  public formattedDateOne: string;
  public weatherImage: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.triggerRequest.pipe().subscribe(() => {
      this.day = this.weatherService.getWeatherById(this.forecastData.id[0]);
      this.formattedDayWeekOne = this.formattedDayWeek(this.day.date);
      this.formattedDateOne = this.formattedDate(this.day.date);
      if (this.day) {
        this.weatherImage = this.weatherService.getWeatherIconByDay(
          this.day.day.condition.text
        );
      }
    });
  }

  formattedDayWeek(date: string): string {
    return moment(date).format('ddd');
  }

  formattedDate(date: string): string {
    return moment(date).format('DD MMMM');
  }
}
