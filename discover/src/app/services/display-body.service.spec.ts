import { TestBed } from '@angular/core/testing';

import { DisplayBodyService } from './display-body.service';

describe('DisplayBodyService', () => {
  let service: DisplayBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
