import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course();
  courses!: Course[];
  errorMessage: string = '';
  file!: string;


  constructor(
    public courseService: CourseService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.courseService.getCourseList().subscribe((data) => {
      this.courses = data;
    });
    this.infoForm();
  }

  infoForm() {
    this.courseService.dataForm = this.fb.group({
      name: [''],
      educationLevel: [''],
      courseLanguage: [''],
      dateUpdated:[],
      dateAdded:[],


    });
  }

  addCourse() {
    const formData = new FormData();

    const course = this.courseService.dataForm.value;
    // formData.append('article', JSON.stringify(product));
    formData.append('course', JSON.stringify(course));


  }
}













