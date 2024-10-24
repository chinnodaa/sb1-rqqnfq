import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import * as CoursesActions from '../../store/courses.actions';
import { CoursesState } from '../../store/courses.reducer';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ courses: CoursesState }>) {
    this.courses$ = this.store.select(state => state.courses.courses);
    this.loading$ = this.store.select(state => state.courses.loading);
  }

  ngOnInit(): void {
    this.store.dispatch(CoursesActions.loadCourses({}));
  }
}