import { Routes } from '@angular/router';

import { JobListComponent } from './components/job-list/job-list.component';
import { JobListFavoritesComponent } from './components/job-list-favorites/job-list-favorites.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobNotFoundComponent } from './components/job-not-found/job-not-found.component';
import { jobExistGuard } from './guards/job-exist.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  {
    path: 'jobs/:jobId',
    component: JobDetailsComponent,
    canActivate: [jobExistGuard],
  },
  { path: 'favorites', component: JobListFavoritesComponent },
  { path: '**', component: JobNotFoundComponent },
];
