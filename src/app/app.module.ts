import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonsModule } from './common/commons.module';
import { LocationService } from './services/location.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherDataService } from './services/weather-data.service';
@NgModule({
  declarations: [AppComponent, WeatherMainComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonsModule,
  ],
  providers: [LocationService, HttpClient, WeatherDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
