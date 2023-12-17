import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhomeComponent } from './navbarhome.component';

describe('NavbarhomeComponent', () => {
  let component: NavbarhomeComponent;
  let fixture: ComponentFixture<NavbarhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarhomeComponent]
    });
    fixture = TestBed.createComponent(NavbarhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
