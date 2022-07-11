import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedItemsComponent } from './damaged-items.component';

describe('DamagedItemsComponent', () => {
  let component: DamagedItemsComponent;
  let fixture: ComponentFixture<DamagedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
