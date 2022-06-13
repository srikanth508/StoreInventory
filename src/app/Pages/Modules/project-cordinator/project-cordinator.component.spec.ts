import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCordinatorComponent } from './project-cordinator.component';

describe('ProjectCordinatorComponent', () => {
  let component: ProjectCordinatorComponent;
  let fixture: ComponentFixture<ProjectCordinatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCordinatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
