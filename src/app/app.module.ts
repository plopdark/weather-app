import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  declarations: [AppComponent, WeatherAppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
