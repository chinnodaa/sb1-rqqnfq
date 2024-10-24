import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() courseId!: string;
  @Input() lectureId!: string;
  videoUrl: string | null = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.loadVideo();
  }

  private loadVideo(): void {
    this.coursesService.getVideoUrl(this.courseId, this.lectureId)
      .subscribe(response => {
        this.videoUrl = response.url;
      });
  }
}