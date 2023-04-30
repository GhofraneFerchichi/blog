import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Course } from "../../models/course";
import { CourseService } from "../../services/course.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css',
    '../../../assets/admin/css/paper-dashboard.css',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',],
  encapsulation: ViewEncapsulation.None,

})
export class ListCourseComponent implements OnInit {

  listCourse: any;
  course: any;
  selectedCourse = null;
  show: boolean = false
  courseForm: FormGroup
  subjectForm: FormGroup
  subject: any
  subjects: any
  selectedFile: File
  constructor(private courseService: CourseService, private subjectService: SubjectService, private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      subjectCategory: ['', Validators.required]
    })
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      educationLevel: ['', Validators.required],
      courseLanguage: ['', Validators.required],
      length: ['', Validators.required],

    })
    this.getAllSubject()
    this.getAllCourses();
  }
  getAllSubject() {
    this.subjectService.getSubjects().subscribe(
      (res: any) => {
        this.subjects = res
      }
    )
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  saveSubject() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('subjectCategory', this.subjectForm.value.subjectCategory);

    this.subjectService.saveSubject(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.getAllSubject()
        Swal.fire({
          'text': 'Subject Saved !',
          'icon': 'success'
        })
      }
    )
  }
  deleteSubject(id: any) {
    this.subjectService.deleteSubject(id).subscribe(
      (res: any) => {
        this.getAllSubject()
        this.getAllCourses()
        Swal.fire({
          'text': 'Subject Deleted Successfully !',
          'icon': 'success'
        })
      }
    )
  }
  getAllCourses(): void {
    this.courseService.getCourseList().subscribe((data: any[]) => {
      this.listCourse = data;
      console.log(this.listCourse)
    })
  }
  getCourseById(id: any) {
    this.courseService.getCourseById(id).subscribe(
      (res: any) => {

        this.course = res
        this.courseForm.patchValue({
          name: this.course?.name,
          educationLevel: this.course?.educationLevel,
          courseLanguage: this.course?.courseLanguage,
          length: this.course?.length

        })
        this.onShow()
      }
    )
  }
  updateCourse() {

    this.courseService.updateCourse(this.courseForm.value, this.course?.idCourse).subscribe(data => {
      console.log(data);
      Swal.fire({
        'icon': 'success',
        'text': 'Updated !'
      })
      this.onShow()
      this.getAllCourses();
    })

  }
  deleteCourse(idCourse: any) {
    this.courseService.deleteCourse(idCourse).subscribe((

    ) => this.getAllCourses());
  }

  onShow() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true
    }
  }
  addCoursesSubject() {
    console.log(this.courseForm.value)
    this.courseService.addCourse(this.courseForm.value, 1, this.subject)
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


}

