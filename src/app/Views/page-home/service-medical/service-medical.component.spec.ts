import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMedicalComponent } from './service-medical.component';

describe('ServiceMedicalComponent', () => {
  let component: ServiceMedicalComponent;
  let fixture: ComponentFixture<ServiceMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceMedicalComponent]
    });
    fixture = TestBed.createComponent(ServiceMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
