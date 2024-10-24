import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = `${environment.apiUrl}/instructor`;

  constructor(private http: HttpClient) {}

  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }

  getCourse(courseId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses/${courseId}`);
  }

  createCourse(courseData: any): Observable<any> {
    const formData = new FormData();
    Object.keys(courseData).forEach(key => {
      formData.append(key, courseData[key]);
    });
    return this.http.post(`${this.apiUrl}/courses`, formData);
  }

  updateCourse(courseId: string, courseData: any): Observable<any> {
    const formData = new FormData();
    Object.keys(courseData).forEach(key => {
      formData.append(key, courseData[key]);
    });
    return this.http.put(`${this.apiUrl}/courses/${courseId}`, formData);
  }

  getEarnings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/earnings`);
  }

  getReviews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews`);
  }
}