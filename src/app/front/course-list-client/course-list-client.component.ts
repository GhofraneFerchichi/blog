import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list-client',
  templateUrl: './course-list-client.component.html',
  styleUrls: ['./course-list-client.component.css',
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
export class CourseListClientComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id']
  courses: any
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.getAllCourses()
  }
  getAllCourses() {
    this.courseService.getCourseList().subscribe(
      (res: any) => {
        this.courses = res.filter((elem: any) => elem?.courseSubject?.idCourseSubject == this.id)
        console.log(this.courses)
      }
    )
  }
}
