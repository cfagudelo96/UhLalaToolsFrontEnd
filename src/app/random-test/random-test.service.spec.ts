import { TestBed } from '@angular/core/testing';

import { RandomTestService } from './random-test.service';

describe('RandomTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomTestService = TestBed.get(RandomTestService);
    expect(service).toBeTruthy();
  });
});
