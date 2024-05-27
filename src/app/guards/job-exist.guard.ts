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

  const jobIdParam = route.paramMap.get('jobId');
  if (!jobIdParam) {
    router.navigate(['/page-not-found']);
    return of(false);
  }

  const jobId = +jobIdParam;
  return jobService.getJobById(jobId).pipe(
    map((job) => {
      if (job) {
        return true;
      } else {
        router.navigate(['/page-not-found']);
        return false;
      }
    }),
    catchError((error) => {
      console.error('Error fetching job', error);
      router.navigate(['/page-not-found']);
      return of(false);
    })
  );
};
