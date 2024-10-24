import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-earnings',
  template: `
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-8">Earnings</h1>
      <mat-card>
        <mat-card-content>
          <h2 class="text-xl font-semibold mb-4">Total Earnings: ${{ totalEarnings }}</h2>
          <!-- Add more earnings details here -->
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class EarningsComponent implements OnInit {
  totalEarnings = 0;

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.instructorService.getEarnings().subscribe(data => {
      this.totalEarnings = data.total;
    });
  }
}