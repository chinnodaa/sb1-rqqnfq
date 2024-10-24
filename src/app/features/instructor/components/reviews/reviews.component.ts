import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-reviews',
  template: `
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-8">Course Reviews</h1>
      <mat-card>
        <mat-card-content>
          <h2 class="text-xl font-semibold mb-4">Average Rating: {{ averageRating }}</h2>
          <!-- Add reviews list here -->
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class ReviewsComponent implements OnInit {
  averageRating = 0;

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.instructorService.getReviews().subscribe(data => {
      this.averageRating = data.average;
    });
  }
}