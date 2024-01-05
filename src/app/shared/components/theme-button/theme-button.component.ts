import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeEnum } from 'src/app/utilities/enums/theme.enum';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent implements OnInit {
  public themeImage = '';

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
