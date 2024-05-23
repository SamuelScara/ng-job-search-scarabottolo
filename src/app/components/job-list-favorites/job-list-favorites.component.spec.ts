import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFavoritesComponent } from './job-list-favorites.component';

describe('JobListFavoritesComponent', () => {
  let component: JobListFavoritesComponent;
  let fixture: ComponentFixture<JobListFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobListFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
