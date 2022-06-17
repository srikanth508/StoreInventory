import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOffInventoryComponent } from './sell-off-inventory.component';

describe('SellOffInventoryComponent', () => {
  let component: SellOffInventoryComponent;
  let fixture: ComponentFixture<SellOffInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellOffInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOffInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
