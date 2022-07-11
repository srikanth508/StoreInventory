import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPosComponent } from './project-pos.component';

describe('ProjectPosComponent', () => {
  let component: ProjectPosComponent;
  let fixture: ComponentFixture<ProjectPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
