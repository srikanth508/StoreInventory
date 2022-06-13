import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationLoginDashboardComponent } from './authorization-login-dashboard.component';

describe('AuthorizationLoginDashboardComponent', () => {
  let component: AuthorizationLoginDashboardComponent;
  let fixture: ComponentFixture<AuthorizationLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationLoginDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
