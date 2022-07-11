import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerDashComponent } from './project-manager-dash.component';

describe('ProjectManagerDashComponent', () => {
  let component: ProjectManagerDashComponent;
  let fixture: ComponentFixture<ProjectManagerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManagerDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
