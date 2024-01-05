import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherService } from './../../shared/services/weather.service';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { ThemeEnum } from 'src/app/utilities/enums/theme.enum';
import * as moment from 'moment';
import { IDayPart } from 'src/app/utilities/interfaces/daypart.interface';
import { INextDays } from 'src/app/utilities/interfaces/nextdays.interface';
import { WeathreIconsEnum } from 'src/app/utilities/enums/weather-icons.enum';
import { FormControl, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  public dayParts: IDayPart[] = this.weatherService.dayParts;
  public nextDays: INextDays[] = this.weatherService.nextDays;
  public selectedCity: string = '';
  public cities: any[] = [];
  public magnifer = '';
  public formattedDate: string = '';
  public formattedTime: string = '';
  public name: string;
  public country: string;
  public temp: number;
  public secondDay: string;
  public secondDate: string;
  public thirdDay: string;
  public thirdDate: string;
  public bigImg: string;
  public city: string;
  public searchForm = new FormControl<string>('');
  public isInputActive: boolean = false;

  public readonly cloudySunny = this.weatherService.cloudySunny;
  public readonly cloudMoon = this.weatherService.cloudMoon;
  public readonly cloudy = this.weatherService.cloudy;
  public readonly sun = this.weatherService.sun;
  public readonly rainy = this.weatherService.rainy;
  public readonly snow = this.weatherService.snow;
  public readonly thunder = this.weatherService.thunder;

  constructor(
    public weatherService: WeatherService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.magniferChange();
    this.getWeather();
  }

  public get lastUpdated(): boolean {
    return this.weatherService.weatherData?.current.last_updated;
  }

  public selectCity(cityName: string): void {
    this.isInputActive = false;
    this.cities = [];
    this.searchForm.setValue('');
    this.weatherService.getWeather(cityName);
  }

  public onInput(): void {
    this.isInputActive = true;
  }

  public onBlur(): void {
    this.isInputActive = false;
  }

  public getWeather(): void {
    this.weatherService.getWeather();
    this.weatherService.triggerRequest.pipe().subscribe(() => {
      this.initData();
    });
    this.searchForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(async (value: string | null) => {
        if (value) {
          const cities = await this.weatherService.getCities(value);
          this.cities = cities;
        }
      });
  }

  public magniferChange(): void {
    if (this.themeService.theme === ThemeEnum.Dark) {
      this.magnifer = 'assets/magnifer-w.png';
    } else {
      this.magnifer = 'assets/magnifer-b.png';
    }
  }

  private initData(): void {
    this.name = this.weatherService.weatherData?.location.name;
    this.country = this.weatherService.weatherData?.location.country;
    this.temp = this.weatherService.weatherData?.current.temp_c;
    const lastUpdated = moment(
      this.weatherService.weatherData.current.last_updated
    );
    this.formattedDate = lastUpdated.format('DD MMM, YYYY');
    this.formattedTime = lastUpdated.format('HH:mm');
    this.bigImg = this.weatherService.getWeatherIconByDay(
      this.weatherService.weatherData.forecast.forecastday[0].day.condition.text
    );
  }
}
