import { Routes } from '@angular/router';

import { JobListComponent } from './components/job-list/job-list.component';
import { JobListFavoritesComponent } from './components/job-list-favorites/job-list-favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'favorites', component: JobListFavoritesComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
