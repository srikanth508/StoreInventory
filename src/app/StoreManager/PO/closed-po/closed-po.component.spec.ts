import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedPOComponent } from './closed-po.component';

describe('ClosedPOComponent', () => {
  let component: ClosedPOComponent;
  let fixture: ComponentFixture<ClosedPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedPOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
