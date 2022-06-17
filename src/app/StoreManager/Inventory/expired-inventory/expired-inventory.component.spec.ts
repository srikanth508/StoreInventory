import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredInventoryComponent } from './expired-inventory.component';

describe('ExpiredInventoryComponent', () => {
  let component: ExpiredInventoryComponent;
  let fixture: ComponentFixture<ExpiredInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
