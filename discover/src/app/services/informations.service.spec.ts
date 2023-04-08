import { TestBed } from '@angular/core/testing';

import { InformationService } from './informations.service';

describe('InformationsService', () => {
  let service: InformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
