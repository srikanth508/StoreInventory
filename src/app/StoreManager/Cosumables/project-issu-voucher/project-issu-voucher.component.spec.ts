import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIssuVoucherComponent } from './project-issu-voucher.component';

describe('ProjectIssuVoucherComponent', () => {
  let component: ProjectIssuVoucherComponent;
  let fixture: ComponentFixture<ProjectIssuVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectIssuVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIssuVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
