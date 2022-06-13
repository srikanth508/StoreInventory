import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryDashboardComponent } from './sub-category-dashboard.component';

describe('SubCategoryDashboardComponent', () => {
  let component: SubCategoryDashboardComponent;
  let fixture: ComponentFixture<SubCategoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
