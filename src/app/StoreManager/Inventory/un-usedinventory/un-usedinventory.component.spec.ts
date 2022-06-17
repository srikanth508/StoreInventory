import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnUsedinventoryComponent } from './un-usedinventory.component';

describe('UnUsedinventoryComponent', () => {
  let component: UnUsedinventoryComponent;
  let fixture: ComponentFixture<UnUsedinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnUsedinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnUsedinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
