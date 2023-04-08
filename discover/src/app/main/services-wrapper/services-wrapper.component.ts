import { Component, OnInit } from '@angular/core';
import { ServiceInformation } from 'src/app/interfaces/serviceInformation';
import { InformationService } from 'src/app/services/informations.service';

@Component({
  selector: 'app-services-wrapper',
  templateUrl: './services-wrapper.component.html',
  styleUrls: ['./services-wrapper.component.scss'],
})
export class ServicesWrapperComponent implements OnInit {
  avaiblableServices: ServiceInformation[] = [];

  constructor(private serviceInformations: InformationService) {}

  ngOnInit(): void {
    this.avaiblableServices = this.serviceInformations.allInformationServices;
  }
}
