import { Injectable } from '@angular/core';

import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobFavoriteService {
  private localStorageKey = 'favoriteJobs';

  constructor() {}

  getFavJobs(): Job[] {
    return this.loadFavorites() ?? [];
  }

  isFavorite(job: Job): boolean {
    const favorites: Job[] = this.loadFavorites();
    return favorites.some((fav) => fav.id === job.id);
  }

  addToFavorites(job: Job): void {
    const favorites = [...this.loadFavorites()];
    if (!this.isFavorite(job)) {
      favorites.push(job);
      this.saveFavorites(favorites);
    }
  }

  removeFavoriteJob(job: Job): void {
    const favorites = this.loadFavorites().filter((fav) => fav.id !== job.id);
    this.saveFavorites(favorites);
  }

  private loadFavorites(): Job[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');
  }

  private saveFavorites(favorites: Job[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
  }
}
