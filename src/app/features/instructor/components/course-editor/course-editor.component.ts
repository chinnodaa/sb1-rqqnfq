import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss']
})
export class CourseEditorComponent implements OnInit {
  courseForm: FormGroup;
  courseId: string | null = null;
  files: File[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService
  ) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      level: ['Beginner', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.loadCourse();
    }
  }

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData = {
        ...this.courseForm.value,
        thumbnail: this.files[0]
      };

      if (this.courseId) {
        this.instructorService.updateCourse(this.courseId, courseData)
          .subscribe(() => this.router.navigate(['/instructor']));
      } else {
        this.instructorService.createCourse(courseData)
          .subscribe(() => this.router.navigate(['/instructor']));
      }
    }
  }

  private loadCourse(): void {
    if (this.courseId) {
      this.instructorService.getCourse(this.courseId).subscribe(course => {
        this.courseForm.patchValue(course);
      });
    }
  }
}