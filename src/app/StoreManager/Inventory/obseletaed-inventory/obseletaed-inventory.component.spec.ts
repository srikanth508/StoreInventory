import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObseletaedInventoryComponent } from './obseletaed-inventory.component';

describe('ObseletaedInventoryComponent', () => {
  let component: ObseletaedInventoryComponent;
  let fixture: ComponentFixture<ObseletaedInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObseletaedInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObseletaedInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
