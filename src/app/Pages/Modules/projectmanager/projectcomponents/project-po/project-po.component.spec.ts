import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPOComponent } from './project-po.component';

describe('ProjectPOComponent', () => {
  let component: ProjectPOComponent;
  let fixture: ComponentFixture<ProjectPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
