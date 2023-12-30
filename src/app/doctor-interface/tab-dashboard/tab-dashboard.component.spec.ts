import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDashboardComponent } from './tab-dashboard.component';

describe('TabDashboardComponent', () => {
  let component: TabDashboardComponent;
  let fixture: ComponentFixture<TabDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDashboardComponent]
    });
    fixture = TestBed.createComponent(TabDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
