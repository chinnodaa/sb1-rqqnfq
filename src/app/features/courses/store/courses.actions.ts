import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';

export const loadCourses = createAction(
  '[Courses] Load Courses',
  props<{ category?: string; search?: string }>()
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: string }>()
);

export const loadCourseDetail = createAction(
  '[Courses] Load Course Detail',
  props<{ courseId: string }>()
);

export const loadCourseDetailSuccess = createAction(
  '[Courses] Load Course Detail Success',
  props<{ course: Course }>()
);

export const loadCourseDetailFailure = createAction(
  '[Courses] Load Course Detail Failure',
  props<{ error: string }>()
);

export const enrollCourse = createAction(
  '[Courses] Enroll Course',
  props<{ courseId: string }>()
);

export const enrollCourseSuccess = createAction(
  '[Courses] Enroll Course Success',
  props<{ courseId: string }>()
);

export const enrollCourseFailure = createAction(
  '[Courses] Enroll Course Failure',
  props<{ error: string }>()
);