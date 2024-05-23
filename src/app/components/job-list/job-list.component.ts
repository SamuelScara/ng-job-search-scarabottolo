import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { Observable } from 'rxjs';
import { JobComponent } from './job/job.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, JobComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
})
export class JobListComponent implements OnInit {
  jobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs$ = this.jobService.getJobs();
  }
}
