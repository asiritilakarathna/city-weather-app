import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { off } from 'process';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  weatherResult: any;
  constructor(
    private locationService: LocationService,
    private weatherDataServic: WeatherDataService
  ) {}

  title = 'city-weather-app';
  myControl = new FormControl('');
  filteredOptions: Observable<any[]> | undefined;

  ngOnInit() {
    this.myControl.valueChanges.subscribe((val) => {
      if (val && val.length > 2) {
        this.filteredOptions = this.getAutoCompleteValues(val);
      }
    });
  }

  searchWeatherResult(data: any) {
    this.locationService.getWeatherResult(data.Key).subscribe((weatherData) => {
      this.weatherDataServic.updatedWeatherData(weatherData);
    });
  }

  private getAutoCompleteValues(value: string) {
    const filterValue = value.toLowerCase();
    return this.locationService.getCityList(filterValue);
  }
}
