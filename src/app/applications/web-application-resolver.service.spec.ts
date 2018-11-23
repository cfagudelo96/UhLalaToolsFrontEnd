import { TestBed } from '@angular/core/testing';

import { WebApplicationResolverService } from './web-application-resolver.service';

describe('WebApplicationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebApplicationResolverService = TestBed.get(WebApplicationResolverService);
    expect(service).toBeTruthy();
  });
});
