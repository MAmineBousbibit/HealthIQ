import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInterfaceComponent } from './doctor-interface.component';

describe('DoctorInterfaceComponent', () => {
  let component: DoctorInterfaceComponent;
  let fixture: ComponentFixture<DoctorInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorInterfaceComponent]
    });
    fixture = TestBed.createComponent(DoctorInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
