import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private _weatherData = new BehaviorSubject({});
  weatherData = this._weatherData.asObservable();

  constructor() {}

  updatedWeatherData(data: any) {
    this._weatherData.next(data);
  }
}
