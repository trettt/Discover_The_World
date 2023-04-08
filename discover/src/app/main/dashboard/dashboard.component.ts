import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  bodyVisible = false;
  header = 'NEW ADVENTURE';

  makeItVisible() {
    this.bodyVisible = true;
  }

  onCitySelected(cityName: string) {
    this.header = cityName;
  }
}
