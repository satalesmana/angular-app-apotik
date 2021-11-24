import { TestBed } from '@angular/core/testing';

import { ObatService } from './obat.service';

describe('ObatService', () => {
  let service: ObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
