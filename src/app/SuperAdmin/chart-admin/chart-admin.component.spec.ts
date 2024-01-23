import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAdminComponent } from './chart-admin.component';

describe('ChartAdminComponent', () => {
  let component: ChartAdminComponent;
  let fixture: ComponentFixture<ChartAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAdminComponent]
    });
    fixture = TestBed.createComponent(ChartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
