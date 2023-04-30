import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";
import {AddPostService} from "../../services/add-post.service";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css',
    '../../../assets/admin/css/paper-dashboard.css',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',]
})
export class AddpostComponent implements OnInit {

  post: any
  posts: any
  selectedFile: File;


  errorMessage: string = '';
  file!: string;
  postForm: FormGroup
  comment: any
  comments: any
  constructor(
    private postService: AddPostService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
    this.getAllPosts()
    this.getAllcomments()
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  getAllPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }
  getAllcomments() {
    this.postService.getCommentList().subscribe(
      (res: any) => {
        this.comments = res
      }
    )
  }
  addPost() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.postForm.value.title);
    formData.append('content', this.postForm.value.content);


    this.postService.addPost(formData)
      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'Post added successfully !'
        })
        this.router.navigateByUrl("/showblog")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })

  }
  onSelectComment(event: any) {
    this.comment = event.target.value
    console.log(this.comment)
  }
}













