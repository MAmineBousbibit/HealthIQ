import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetPatientComponent } from './tabset-patient.component';

describe('TabsetPatientComponent', () => {
  let component: TabsetPatientComponent;
  let fixture: ComponentFixture<TabsetPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsetPatientComponent]
    });
    fixture = TestBed.createComponent(TabsetPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
