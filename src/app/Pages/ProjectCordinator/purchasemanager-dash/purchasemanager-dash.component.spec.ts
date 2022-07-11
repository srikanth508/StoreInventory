import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasemanagerDashComponent } from './purchasemanager-dash.component';

describe('PurchasemanagerDashComponent', () => {
  let component: PurchasemanagerDashComponent;
  let fixture: ComponentFixture<PurchasemanagerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasemanagerDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasemanagerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
