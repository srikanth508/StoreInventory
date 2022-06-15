import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStatusReportComponent } from './material-status-report.component';

describe('MaterialStatusReportComponent', () => {
  let component: MaterialStatusReportComponent;
  let fixture: ComponentFixture<MaterialStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialStatusReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
