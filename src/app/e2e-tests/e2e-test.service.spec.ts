import { TestBed } from '@angular/core/testing';

import { E2ETestService } from './e2e-test.service';

describe('E2ETestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: E2ETestService = TestBed.get(E2ETestService);
    expect(service).toBeTruthy();
  });
});
