import { nextDays } from './../../utilities/const/nextdays.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { dayParts } from 'src/app/utilities/const/daypart.const';
import { IDayPart } from 'src/app/utilities/interfaces/daypart.interface';
import { IWeatherData } from 'src/app/utilities/interfaces/weatherdata.interface';
import { INextDays } from 'src/app/utilities/interfaces/nextdays.interface';
import { WeathreIconsEnum } from 'src/app/utilities/enums/weather-icons.enum';
import { CloudyEnum } from 'src/app/utilities/enums/cloudy.enum';
import { RainEnum } from 'src/app/utilities/enums/rain.enum';
import { SnowEnum } from 'src/app/utilities/enums/snow.enum';
import { SunEnum } from 'src/app/utilities/enums/sun.enum';
import { ThunderEnum } from 'src/app/utilities/enums/thunder.enum';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public key = '890ac24d69024e8fa11102916231311';
  public baseUrl = 'http://api.weatherapi.com/v1';
  public readonly city = 'Vinnytsya';
  public readonly dayParts: IDayPart[] = dayParts;
  public readonly nextDays: INextDays[] = nextDays;
  public weatherData: any;
  public triggerRequest = new Subject();
  public weatherImageByDay: string;
  public weatherImageByTime: string;

  public readonly cloudySunny = WeathreIconsEnum.CloudySunny;
  public readonly cloudMoon = WeathreIconsEnum.CloudMoon;
  public readonly cloudy = WeathreIconsEnum.Cloudy;
  public readonly sun = WeathreIconsEnum.Sun;
  public readonly rainy = WeathreIconsEnum.Rainy;
  public readonly snow = WeathreIconsEnum.Snow;
  public readonly thunder = WeathreIconsEnum.Thunder;

  constructor(public http: HttpClient) {}

  public getWeather(city?: string): void {
    this.getWeatherData(city || this.city).subscribe((value) => {
      this.weatherData = value;
      console.log(value);
      this.triggerRequest.next('');
    });
  }

  public getHourlyWeather(hour: string) {
    if (!this.weatherData) return null;
    return this.weatherData.forecast.forecastday[0].hour.find(
      (time: any) => moment(time.time).format('HH:mm') === hour
    );
  }

  public getWeatherById(id: number) {
    if (!this.weatherData) return null;
    return this.weatherData.forecast.forecastday.find(
      (a: any, index: any) => index === id
    );
  }

  public getWeatherIconByDay(currentDay: string): string {
    if (this.isCurrentDay(CloudyEnum, currentDay)) {
      return WeathreIconsEnum.Cloudy;
    } else if (this.isCurrentDay(RainEnum, currentDay)) {
      return WeathreIconsEnum.Rainy;
    } else if (this.isCurrentDay(SunEnum, currentDay)) {
      return WeathreIconsEnum.Sun;
    } else if (this.isCurrentDay(SnowEnum, currentDay)) {
      return WeathreIconsEnum.Snow;
    } else {
      return WeathreIconsEnum.Thunder;
    }
  }

  public getWeatherData(city: string, hour?: string): Observable<IWeatherData> {
    return this.http.get<any>(
      `${this.baseUrl}/forecast.json?key=${this.key}&q=${city}&days=3&hour=${hour}&aqi=no&alerts=no`
    );
  }

  public async getCities(query: string): Promise<any> {
    const url = `${this.baseUrl}/search.json?key=${this.key}&q=${query}`;
    return this.http.get<any>(url).toPromise();
  }

  private isCurrentDay(enumType: any, currentDay: string): boolean {
    let isCurrentText = false;
    Object.values(enumType).forEach((value) => {
      if (!isCurrentText) {
        isCurrentText = value === currentDay;
      }
    });
    return isCurrentText;
  }
}
