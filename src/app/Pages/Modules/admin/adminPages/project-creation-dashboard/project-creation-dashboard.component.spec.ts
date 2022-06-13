import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationDashboardComponent } from './project-creation-dashboard.component';

describe('ProjectCreationDashboardComponent', () => {
  let component: ProjectCreationDashboardComponent;
  let fixture: ComponentFixture<ProjectCreationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
