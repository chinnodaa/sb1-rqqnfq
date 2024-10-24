import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CoursesService } from '../services/courses.service';
import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      mergeMap(({ category, search }) =>
        this.coursesService.getCourses(category, search).pipe(
          map(courses => CoursesActions.loadCoursesSuccess({ courses })),
          catchError(error => of(CoursesActions.loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  loadCourseDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadCourseDetail),
      mergeMap(({ courseId }) =>
        this.coursesService.getCourseDetail(courseId).pipe(
          map(course => CoursesActions.loadCourseDetailSuccess({ course })),
          catchError(error => of(CoursesActions.loadCourseDetailFailure({ error: error.message })))
        )
      )
    )
  );

  enrollCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.enrollCourse),
      mergeMap(({ courseId }) =>
        this.coursesService.enrollCourse(courseId).pipe(
          map(() => CoursesActions.enrollCourseSuccess({ courseId })),
          catchError(error => of(CoursesActions.enrollCourseFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}