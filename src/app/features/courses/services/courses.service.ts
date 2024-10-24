import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) {}

  getCourses(category?: string, search?: string): Observable<Course[]> {
    let url = this.apiUrl;
    const params: any = {};
    
    if (category) params.category = category;
    if (search) params.search = search;

    return this.http.get<Course[]>(url, { params });
  }

  getCourseDetail(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`);
  }

  enrollCourse(courseId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${courseId}/enroll`, {});
  }

  getVideoUrl(courseId: string, lectureId: string): Observable<{ url: string }> {
    return this.http.get<{ url: string }>(`${this.apiUrl}/${courseId}/lectures/${lectureId}/video`);
  }
}