import { CloudyEnum } from '../enums/cloudy.enum';
import { RainEnum } from '../enums/rain.enum';
import { SnowEnum } from '../enums/snow.enum';
import { SunEnum } from '../enums/sun.enum';
import { ThunderEnum } from '../enums/thunder.enum';

export interface WeatherInterface {
  Cloudy: CloudyEnum;
  Snow: SnowEnum;
  Sun: SunEnum;
  Thunder: ThunderEnum;
  Rain: RainEnum;
}
