import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectindentpmdashComponent } from './newprojectindentpmdash.component';

describe('NewprojectindentpmdashComponent', () => {
  let component: NewprojectindentpmdashComponent;
  let fixture: ComponentFixture<NewprojectindentpmdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojectindentpmdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectindentpmdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
