import { Component } from '@angular/core';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  bodyVisible = false;
  header = 'NEW ADVENTURE';

  filteredCities: City[] = [];

  updateFilteredCities(filteredCities: City[]) {
    this.filteredCities = filteredCities;
  }

  makeItVisible() {
    this.bodyVisible = true;
  }

  onCitySelected(cityName: string) {
    this.header = cityName;
  }
}
