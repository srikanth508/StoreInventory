import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnItemsReportComponent } from './return-items-report.component';

describe('ReturnItemsReportComponent', () => {
  let component: ReturnItemsReportComponent;
  let fixture: ComponentFixture<ReturnItemsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnItemsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
