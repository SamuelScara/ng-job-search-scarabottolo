import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-not-found.component.html',
  styleUrl: './job-not-found.component.css',
})
export class JobNotFoundComponent {}
