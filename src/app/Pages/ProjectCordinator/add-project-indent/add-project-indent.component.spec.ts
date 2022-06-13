import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectIndentComponent } from './add-project-indent.component';

describe('AddProjectIndentComponent', () => {
  let component: AddProjectIndentComponent;
  let fixture: ComponentFixture<AddProjectIndentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectIndentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
