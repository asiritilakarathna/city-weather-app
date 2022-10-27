import { NgModule } from '@angular/core';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [WeatherCardComponent, WeatherSearchComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [WeatherCardComponent, WeatherSearchComponent],
})
export class CommonsModule {}
