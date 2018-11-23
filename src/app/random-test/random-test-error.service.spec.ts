import { TestBed } from '@angular/core/testing';

import { RandomTestErrorService } from './random-test-error.service';

describe('RandomTestErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomTestErrorService = TestBed.get(RandomTestErrorService);
    expect(service).toBeTruthy();
  });
});
