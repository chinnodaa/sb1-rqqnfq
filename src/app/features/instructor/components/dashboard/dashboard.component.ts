import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration } from 'chart.js';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  revenueData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Monthly Revenue',
      fill: false,
      tension: 0.1,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)'
    }]
  };

  studentData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Students Enrolled',
      backgroundColor: 'rgba(54, 162, 235, 0.5)'
    }]
  };

  constructor(
    private instructorService: InstructorService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.instructorService.getDashboardStats().subscribe(stats => {
      this.revenueData.labels = stats.revenue.map(item => item.month);
      this.revenueData.datasets[0].data = stats.revenue.map(item => item.amount);
      
      this.studentData.labels = stats.students.map(item => item.month);
      this.studentData.datasets[0].data = stats.students.map(item => item.count);
    });
  }
}