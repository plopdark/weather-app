import { Injectable } from '@angular/core';
import { ThemeEnum } from '../../utilities/enums/theme.enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public storedTheme = localStorage.getItem('theme-color');
  public themeChanged = new Subject<void>();

  constructor() {}

  public get theme(): string {
    return this.storedTheme!;
  }

  public changeTheme(): void {
    if (this.storedTheme === ThemeEnum.Dark) {
      this.storedTheme = ThemeEnum.White;
    } else {
      this.storedTheme = ThemeEnum.Dark;
    }
    localStorage.setItem('theme-color', this.storedTheme);
  }
}
