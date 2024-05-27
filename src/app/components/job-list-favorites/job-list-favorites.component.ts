import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { JobFavoriteComponent } from './job-favorite/job-favorite.component';
import { Job } from '../../models/job.model';
import { JobFavoriteService } from '../../services/job-favorite.service';

@Component({
  selector: 'app-job-list-favorites',
  standalone: true,
  imports: [CommonModule, JobFavoriteComponent],
  templateUrl: './job-list-favorites.component.html',
  styleUrl: './job-list-favorites.component.css',
})
export class JobListFavoritesComponent implements OnInit {
  favJobs: Job[];

  constructor(private jobFavService: JobFavoriteService) {
    this.favJobs = [];
  }

  ngOnInit(): void {
    this.favJobs = this.jobFavService.getFavJobs();
  }
}
