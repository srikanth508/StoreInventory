import { TestBed } from '@angular/core/testing';

import { DigiInventoryService } from './digi-inventory.service';

describe('DigiInventoryService', () => {
  let service: DigiInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
