import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationMasterComponent } from './project-creation-master.component';

describe('ProjectCreationMasterComponent', () => {
  let component: ProjectCreationMasterComponent;
  let fixture: ComponentFixture<ProjectCreationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
