import { Component, Input } from '@angular/core';
import { Job } from '../../../models/job.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent {
  @Input() job!: Job;

  constructor() {}
}
