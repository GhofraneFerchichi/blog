import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-client',
  templateUrl: './course-client.component.html',
  styleUrls: ['./course-client.component.css',
    '../../../assets/front/css/style.css',
    '../../../assets/front/css/slick.css',
    '../../../assets/front/css/responsive.css',
    '../../../assets/front/css/nice-select.css',
    '../../../assets/front/css/magnific-popup.css',
    '../../../assets/front/css/jquery.nice-number.min.css',
    '../../../assets/front/css/font-awesome.min.css',
    '../../../assets/front/css/default.css',
    '../../../assets/front/css/bootstrap.min.css',
    '../../../assets/front/css/animate.css']
})
export class CourseClientComponent implements OnInit {

  listCourse: any;
  course: any;
  selectedCourse = null;
  show: boolean = false
  courseForm: FormGroup
  subjectForm: FormGroup
  subject: any
  subjects: any
  selectedFile: File
  constructor(private courseService: CourseService, private subjectService: SubjectService, private fb: FormBuilder, private router: Router) { }

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
