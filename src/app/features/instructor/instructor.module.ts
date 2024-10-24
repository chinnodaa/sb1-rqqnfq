import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CourseEditorComponent } from './components/course-editor/course-editor.component';
import { EarningsComponent } from './components/earnings/earnings.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'course/create', component: CourseEditorComponent },
  { path: 'course/edit/:id', component: CourseEditorComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'reviews', component: ReviewsComponent }
];

@NgModule({
  declarations: [
    DashboardComponent,
    CourseEditorComponent,
    EarningsComponent,
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgChartsModule,
    QuillModule.forRoot(),
    NgxDropzoneModule
  ]
})
export class InstructorModule { }