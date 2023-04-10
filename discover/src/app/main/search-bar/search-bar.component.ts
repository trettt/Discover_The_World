import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() filteredCitiesChanged = new EventEmitter<City[]>();
  searchTerm: string = '';
  cities: City[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.citiesService.cities;
  }

  get filteredCities() {
    return this.cities.filter((city) =>
      city.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchTermChanged() {
    this.filteredCitiesChanged.emit(this.filteredCities);
  }
}
