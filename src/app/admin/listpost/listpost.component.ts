import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {CategoryProductService} from "../../services/category-product.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {AddPostService} from "../../services/add-post.service";

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {
  listPosts: any;
  post: any;
  selectedProduct = null;
  show: boolean = false
  postForm: FormGroup
  categoryForm: FormGroup
  categry: any
  categories: any
  selectedFile: File
  constructor(private postService: AddPostService, private categoryService: CategoryProductService, private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      category: ['', Validators.required]
    })
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],


    })
    this.getCommentList()
    this.getPostList();
  }
  getCommentList() {
    this.postService.getCommentList().subscribe(
      (res: any) => {
        this.categories = res
      }
    )
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  saveComment() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('comment', this.categoryForm.value.comment);

    this.categoryService.saveCategory(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.getCommentList()
        Swal.fire({
          'text': 'Comment Saved !',
          'icon': 'success'
        })
      }
    )
  }
  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe(
      (res: any) => {
        this.getCommentList()
        this.getPostList()
        Swal.fire({
          'text': 'Subject Deleted Successfully !',
          'icon': 'success'
        })
      }
    )
  }
  getPostList(): void {
    this.postService.getPostList().subscribe((data: any[]) => {
      this.listPosts = data;
      console.log(this.listPosts)
    })
  }
  getProdById(id: any) {
    this.postService.getPostById(id).subscribe(
      (res: any) => {

        this.post = res
        this.postForm.patchValue({
          title: this.post?.title,
          content: this.post?.content,


        })
        this.onShow()
      }
    )
  }
  updateProduct() {

    this.postService.updatePost(this.postForm.value, this.post?.id).subscribe(data => {
      console.log(data);
      Swal.fire({
        'icon': 'success',
        'text': 'Updated !'
      })
      this.onShow()
      this.getPostList();
    })

  }
  deleteProduct(id: any) {
    this.postService.deletePost(id).subscribe((

    ) => this.getPostList());
  }

  onShow() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true
    }
  }
  addPost() {
    console.log(this.postForm.value)
    this.postService.addPost(this.postForm.value)
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
