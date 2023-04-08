import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { DisplayBodyService } from 'src/app/services/display-body.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss'],
})
export class AdventureComponent {
  adventureVisible = false;

  constructor(private citiesService: DisplayBodyService) {}

  discoverButtonClicked() {
    this.adventureVisible = true;
    this.citiesService.setVisibility(this.adventureVisible);
  }
}
