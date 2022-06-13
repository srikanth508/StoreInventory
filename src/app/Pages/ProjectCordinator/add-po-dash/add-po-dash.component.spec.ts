import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoDashComponent } from './add-po-dash.component';

describe('AddPoDashComponent', () => {
  let component: AddPoDashComponent;
  let fixture: ComponentFixture<AddPoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
