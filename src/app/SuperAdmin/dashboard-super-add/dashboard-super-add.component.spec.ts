import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuperAddComponent } from './dashboard-super-add.component';

describe('DashboardSuperAddComponent', () => {
  let component: DashboardSuperAddComponent;
  let fixture: ComponentFixture<DashboardSuperAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSuperAddComponent]
    });
    fixture = TestBed.createComponent(DashboardSuperAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
