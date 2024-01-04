import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDocComponent } from './navbar-doc.component';

describe('NavbarDocComponent', () => {
  let component: NavbarDocComponent;
  let fixture: ComponentFixture<NavbarDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDocComponent]
    });
    fixture = TestBed.createComponent(NavbarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
