import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of } from 'rxjs';

import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }

  getJobById(id: number): Observable<Job | null> {
    return this.http.get<Job>(`/jobs/${id}`).pipe(catchError(() => of(null)));
  }
}
