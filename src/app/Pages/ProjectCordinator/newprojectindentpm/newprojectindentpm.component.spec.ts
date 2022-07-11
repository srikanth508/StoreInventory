import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprojectindentpmComponent } from './newprojectindentpm.component';

describe('NewprojectindentpmComponent', () => {
  let component: NewprojectindentpmComponent;
  let fixture: ComponentFixture<NewprojectindentpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprojectindentpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprojectindentpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
