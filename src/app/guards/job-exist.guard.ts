import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { map, of } from 'rxjs';
import { catchError } from 'rxjs';

import { JobService } from '../services/job.service';

export const jobExistGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const jobService = inject(JobService);
  const router = inject(Router);

  const jobId = +route.paramMap.get('jobId')!;
  return jobService.getJobById(jobId).pipe(
    map((job) => {
      if (job) {
        return true;
      } else {
        router.navigate(['/page-not-found']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/page-not-found']);
      return of(false);
    })
  );
};
