import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Job } from '../../../models/job.model';

@Component({
  selector: 'app-job-favorite',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.css',
})
export class JobFavoriteComponent {
  @Input() favJob!: Job;
}
