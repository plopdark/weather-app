import { DayPartEnum } from '../enums/daypart.enum';
import { IDayPart } from '../interfaces/daypart.interface';

export const dayParts: IDayPart[] = [
  { daypart: DayPartEnum.Night, time: ['02:00', '05:00'] },
  { daypart: DayPartEnum.Morning, time: ['08:00', '11:00'] },
  { daypart: DayPartEnum.Day, time: ['14:00', '17:00'] },
  { daypart: DayPartEnum.Evening, time: ['20:00', '23:00'] },
];
