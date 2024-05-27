import { Injectable } from '@angular/core';

import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobFavoriteService {
  private localStorageKey = 'favoriteJobs';

  constructor() {}

  getFavJobs(): Job[] {
    return this.loadFavorites();
  }

  isFavorite(job: Job): boolean {
    return this.getFavJobs().some((fav) => fav.id === job.id);
  }

  addToFavorites(job: Job): void {
    const favorites: Job[] = this.getFavJobs();
    if (!favorites.some((fav) => fav.id === job.id)) {
      this.saveFavorites([...favorites, job]);
    }
  }

  removeFavoriteJob(job: Job): void {
    const updatedFavorites: Job[] = this.getFavJobs().filter(
      (fav) => fav.id !== job.id
    );
    this.saveFavorites(updatedFavorites);
  }

  private loadFavorites(): Job[] {
    try {
      const data: string | null = localStorage.getItem(this.localStorageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading favorites from localStorage', error);
      return [];
    }
  }

  private saveFavorites(favorites: Job[]): void {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  }
}
