import { TestBed } from '@angular/core/testing';

import { WebApplicationService } from './web-application.service';

describe('WebApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebApplicationService = TestBed.get(WebApplicationService);
    expect(service).toBeTruthy();
  });
});
