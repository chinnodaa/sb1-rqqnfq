import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import * as CoursesActions from '../../store/courses.actions';
import { CoursesState } from '../../store/courses.reducer';
import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course | null>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ courses: CoursesState }>,
    private stripeService: StripeService
  ) {
    this.course$ = this.store.select(state => state.courses.selectedCourse);
    this.loading$ = this.store.select(state => state.courses.loading);
  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.store.dispatch(CoursesActions.loadCourseDetail({ courseId }));
    }
  }

  async enrollCourse(courseId: string, price: number): Promise<void> {
    const stripe = await this.stripeService.getStripe();
    
    // Create payment session and redirect to Stripe checkout
    // Implementation depends on your backend payment integration
  }
}