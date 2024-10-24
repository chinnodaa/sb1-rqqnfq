import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { coursesReducer } from './store/courses.reducer';
import { CoursesEffects } from './store/courses.effects';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'search', component: CourseSearchComponent },
  { path: ':id', component: CourseDetailComponent }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    VideoPlayerComponent,
    CourseSearchComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('courses', coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
    MatProgressBarModule,
    MatTabsModule,
    NgxStripeModule.forRoot('your_publishable_key')
  ]
})
export class CoursesModule { }