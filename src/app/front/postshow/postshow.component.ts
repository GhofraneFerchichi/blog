import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {CategoryProductService} from "../../services/category-product.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {AddPostService} from "../../services/add-post.service";
import {throwError} from "rxjs";
import {CommentService} from "../comment/comment.service";
import {PostPayload} from "../../models/post-payload";
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-showpost',
  templateUrl: './postshow.component.html',
  styleUrls: ['./postshow.component.css']
})
export class PostshowComponent implements OnInit {
  listPosts: any;
  post: any;
  selectedProduct = null;
  show: boolean = false
  postForm: FormGroup
  categoryForm: FormGroup
  categry: any
  //comments: any
  selectedFile: File
  comForm: FormGroup
  comment:Comment = new Comment();
  selectedComment: string;
  commentContent: string;
  newCommentContent:string;
  comments:any;
  postId: number;

  constructor(private postService: AddPostService, private commentService: CommentService, private fb: FormBuilder, private router: Router,private activateRoute: ActivatedRoute,
              private route: ActivatedRoute,
  ) {
    this.postId = this.activateRoute.snapshot.params['id'];

  }
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(this.postId).subscribe(post => this.post = post);
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],


    })
    this.comForm = this.fb.group({
      content: ['', Validators.required],


    })
    this.getPostById();
    this.getPostList();
    this.getCommentByPost(this.postId);
this.getCommentList();
  }


  getCommentList() {
    if (this.postId==this.comment.post.postId){
    this.postService.getCommentList().subscribe(
      (res: any) => {
        this.comments = res
      }
    )
  }}

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }
  onSelectComment(event: any) {
    this.comment = event.target.value
    console.log(this.comment)
  }

  addPostcom() {
    const formData = new FormData();
    formData.append('content', this.postForm.value.content);

    this.postService.addPostcom(formData, 1, 1)
      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'comment added successfully !'
        })
        this.router.navigateByUrl("/showpost")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })
  }
  selectedPost(postId: number): void {
    this.postId = postId; // Save the selected post ID in a class property
  }

  selectedcommentt(id:number):number{
    return this.comment.id = id;


  }
    addComment(): void {
    this.postService.saveComment(this.comment,this.postId ).subscribe((res: any) => {
      console.log(res)
      Swal.fire({
        'icon': 'success',
        'text': 'comment added successfully !'
      })
      this.router.navigate(['/showpost']);
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  deleteComment(id: any) {
    this.commentService.deleteComment(id).subscribe(
      (res: any) => {
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

    this.postService.updatePost(this.postForm.value, this.post?.postId).subscribe(data => {
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
    const formData = new FormData();

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
  onDelete(id: number) {
    this.postService.deletePost(id).subscribe(
      (response: any) => {
        console.log(response);
        console.log('Cool');
        this.router.navigate(['/listPost']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  onEdite(id: number) {
    this.router.navigate(['/post/edit/' + id]);
  }


  getCommentByPost(postId: number) {
    this.commentService.getCommentByPost(postId).subscribe(data => {
      this.comments = data;
    });
  }
}
