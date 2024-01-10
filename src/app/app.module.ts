import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { SharedModule } from './shared/shared.module';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  declarations: [AppComponent, WeatherMainComponent, WeatherPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
