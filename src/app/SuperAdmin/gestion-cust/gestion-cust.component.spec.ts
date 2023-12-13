import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCustComponent } from './gestion-cust.component';

describe('GestionCustComponent', () => {
  let component: GestionCustComponent;
  let fixture: ComponentFixture<GestionCustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCustComponent]
    });
    fixture = TestBed.createComponent(GestionCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
