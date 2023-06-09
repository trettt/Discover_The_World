import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWrapperComponent } from './services-wrapper.component';

describe('ServicesWrapperComponent', () => {
  let component: ServicesWrapperComponent;
  let fixture: ComponentFixture<ServicesWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
