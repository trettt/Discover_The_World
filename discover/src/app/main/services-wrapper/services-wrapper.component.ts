import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/informations.service';

@Component({
  selector: 'app-services-wrapper',
  templateUrl: './services-wrapper.component.html',
  styleUrls: ['./services-wrapper.component.scss'],
})
export class ServicesWrapperComponent {
  constructor(public serviceInformations: InformationService) {}
}
