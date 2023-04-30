import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-managment',
  templateUrl: './post-managment.component.html',
  styleUrls: ['./post-managment.component.css']
})
export class PostManagmentComponent implements OnInit {
  listofpost:Post[];
  constructor(private ps:PostServiceService) { }

  ngOnInit(): void {
    this.getallpost();
  }
getallpost(){
  this.ps.getPost().subscribe(
    data=>{
      console.log(data)
      this.listofpost=data;
    }
  )
}
supprimer(post :any){
  this.ps.deletePost(post.postId).subscribe(()=>this.ps.getPost().subscribe(
    data=>{
      this.listofpost=data
      
    }
  )
  );
}
}
