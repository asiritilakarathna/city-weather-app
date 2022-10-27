import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  weatherData: any;
  constructor(private weatherDataServic: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherDataServic.weatherData.subscribe(data=>{
      this.weatherData = data;
    });
  }
}
