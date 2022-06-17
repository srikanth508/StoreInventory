import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiringinventoryComponent } from './expiringinventory.component';

describe('ExpiringinventoryComponent', () => {
  let component: ExpiringinventoryComponent;
  let fixture: ComponentFixture<ExpiringinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiringinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiringinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
