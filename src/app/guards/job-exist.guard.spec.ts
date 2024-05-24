import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { jobExistGuard } from './job-exist.guard';

describe('jobExistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => jobExistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
