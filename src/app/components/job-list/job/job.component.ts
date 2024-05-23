import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Job } from '../../../models/job.model';
import { JobFavoriteService } from '../../../services/job-favorite.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  @Input() job!: Job;

  constructor(private jobFavService: JobFavoriteService) {}

  toggleFavorite(): void {
    if (this.isFavorite()) {
      this.jobFavService.removeFavoriteJob(this.job);
    } else {
      this.jobFavService.addToFavorites(this.job);
    }
  }

  isFavorite(): boolean {
    return this.jobFavService.isFavorite(this.job);
  }
}
