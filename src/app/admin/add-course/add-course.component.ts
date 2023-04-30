import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProduct } from 'src/app/models/category-product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { CourseService } from "../../services/course.service";
import { Course } from "../../models/course";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: [
    './add-course.component.css',
    '../../../assets/admin/css/paper-dashboard.css',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddCourseComponent implements OnInit {
  course: any
  courses: any
  selectedFile: File;


  errorMessage: string = '';
  file!: string;
  courseForm: FormGroup
  courseSubjects: any
  subject: any
  constructor(
    private courseService: CourseService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      educationLevel: ['', Validators.required],
      courseLanguage: ['', Validators.required],
      length: ['', Validators.required],
    })
    this.getAllCourses()
    this.getAllsubject()
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  getAllCourses() {
    this.courseService.getCourseList().subscribe((data) => {
      this.courses = data;
    });
  }
  getAllsubject() {
    this.courseService.getCourseSubjectList().subscribe(
      (res: any) => {
        this.courseSubjects = res
      }
    )
  }
  addCourse() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('name', this.courseForm.value.name);
    formData.append('educationLevel', this.courseForm.value.educationLevel);
    formData.append('courseLanguage', this.courseForm.value.courseLanguage);
    formData.append('length', this.courseForm.value.length);

    this.courseService.addCourse(formData, 1, this.subject)
      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'Course added successfully !'
        })
        this.router.navigateByUrl("/listCourse")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })

  }
  onSelectSubject(event: any) {
    this.subject = event.target.value
    console.log(this.subject)
  }
}













