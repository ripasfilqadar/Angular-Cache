import { TestBed } from '@angular/core/testing';

import { AngularCacheService } from './angular-cache.service';

describe('AngularCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularCacheService = TestBed.get(AngularCacheService);
    expect(service).toBeTruthy();
  });
});
