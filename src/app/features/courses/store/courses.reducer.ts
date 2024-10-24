import { createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { Course } from '../models/course.model';

export interface CoursesState {
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  selectedCourse: null,
  loading: false,
  error: null
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false
  })),
  on(CoursesActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CoursesActions.loadCourseDetail, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CoursesActions.loadCourseDetailSuccess, (state, { course }) => ({
    ...state,
    selectedCourse: course,
    loading: false
  })),
  on(CoursesActions.loadCourseDetailFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CoursesActions.enrollCourseSuccess, (state, { courseId }) => ({
    ...state,
    courses: state.courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true } : course
    ),
    selectedCourse: state.selectedCourse?.id === courseId
      ? { ...state.selectedCourse, enrolled: true }
      : state.selectedCourse
  }))
);