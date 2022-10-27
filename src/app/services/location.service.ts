import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LocationService {

  // This should be moved to environment file, didn't have time to implement
  private REST_API_SERVER =
    'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  private WEATHER_API_SERVER =
    'http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/';
  private API_KEY = 'Azuq8JyyG43f4Lkmb4FHbv48iJUO3nQb';

  constructor(private httpClient: HttpClient) {}

  public getCityList(query: String): Observable<any> {
    let url = `${this.REST_API_SERVER}?apikey=${this.API_KEY}&q=${query}&language=en-US`;
    return this.httpClient.get(url);
  }

  public getWeatherResult(key: String): Observable<any> {
    let url = `${this.WEATHER_API_SERVER}/${key}?apikey=${this.API_KEY}&language=en-US&metric=true&details=true`;
    return this.httpClient.get(url);
  }
}
