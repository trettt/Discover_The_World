import { Component } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { DisplayBodyService } from 'src/app/services/display-body.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public adventureService: DisplayBodyService) {}
}
