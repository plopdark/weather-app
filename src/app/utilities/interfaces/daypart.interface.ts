import { DayPartEnum } from '../enums/daypart.enum';

export interface IDayPart {
  daypart: DayPartEnum;
  time: string[];
}
