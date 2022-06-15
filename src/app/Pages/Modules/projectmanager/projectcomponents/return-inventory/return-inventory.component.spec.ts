import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnInventoryComponent } from './return-inventory.component';

describe('ReturnInventoryComponent', () => {
  let component: ReturnInventoryComponent;
  let fixture: ComponentFixture<ReturnInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
