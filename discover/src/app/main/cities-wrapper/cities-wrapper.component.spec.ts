import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesWrapperComponent } from './cities-wrapper.component';

describe('CitiesWrapperComponent', () => {
  let component: CitiesWrapperComponent;
  let fixture: ComponentFixture<CitiesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
