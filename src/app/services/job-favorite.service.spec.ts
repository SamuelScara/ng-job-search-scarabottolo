import { TestBed } from '@angular/core/testing';

import { JobFavoriteService } from './job-favorite.service';

describe('JobFavoriteService', () => {
  let service: JobFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
