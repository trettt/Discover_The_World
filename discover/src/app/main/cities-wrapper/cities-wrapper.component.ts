import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-cities-wrapper',
  templateUrl: './cities-wrapper.component.html',
  styleUrls: ['./cities-wrapper.component.scss'],
})
export class CitiesWrapperComponent implements OnInit {
  cities: City[] = [];
  @Output() cityToVisit = new EventEmitter<string>();
  @Input() filteredCities: City[] = [];

  constructor(private serviceCities: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.serviceCities.cities;
  }

  selectedCity(cityName: string) {
    this.cityToVisit.emit(cityName);
  }
}
