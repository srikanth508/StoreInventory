import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationDashboardComponent } from './authorization-dashboard.component';

describe('AuthorizationDashboardComponent', () => {
  let component: AuthorizationDashboardComponent;
  let fixture: ComponentFixture<AuthorizationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
