import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLoginDashboardComponent } from './vendor-login-dashboard.component';

describe('VendorLoginDashboardComponent', () => {
  let component: VendorLoginDashboardComponent;
  let fixture: ComponentFixture<VendorLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorLoginDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
