import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNotFoundComponent } from './job-not-found.component';

describe('JobNotFoundComponent', () => {
  let component: JobNotFoundComponent;
  let fixture: ComponentFixture<JobNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
