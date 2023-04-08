import { Injectable } from '@angular/core';
import { ServiceInformation } from '../interfaces/serviceInformation';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  informationServices: ServiceInformation[] = [
    {
      title: 'TRAVEL',
      subtitle: 'Article title',
      description:
        'Lorem ipsum dolor sit amet, ipsum tabitur lucilius mel id, ad has appareat...',
    },
    {
      title: 'TRAVEL ARRANGMENTS',
      subtitle: 'Article title',
      description:
        'Lorem ipsum dolor sit amet, ipsum tabitur lucilius mel id, ad has appareat...',
    },
    {
      title: 'OUR PROFESSIONAL GUIDE',
      subtitle: 'Article title',
      description:
        'Lorem ipsum dolor sit amet, ipsum tabitur lucilius mel id, ad has appareat...',
    },
    {
      title: 'ACTIVITIES',
      subtitle: 'Article title',
      description:
        'Lorem ipsum dolor sit amet, ipsum tabitur lucilius mel id, ad has appareat...',
    },
  ];

  constructor() {}

  get allInformationServices(): ServiceInformation[] {
    return this.informationServices;
  }
}
