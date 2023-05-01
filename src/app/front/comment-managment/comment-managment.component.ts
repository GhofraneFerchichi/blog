import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-comment-managment',
  templateUrl: './comment-managment.component.html',
  styleUrls: ['./comment-managment.component.css']
})
export class CommentManagmentComponent implements OnInit {
  isReady:boolean=false;
  public cmtform: FormGroup;
  listofcmt:Comment[][];
  listofpost:Post[];
  nbrlike:Number[]=[]
  nbrdislike:Number[]=[]
  constructor(private ps:PostServiceService,private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.getallpost();
    this.initForm();
  }
  initForm() {
    this.cmtform = this.formBuilder.group({
      content: ['', Validators.required],

  });

  this.cmtform.valueChanges.subscribe(
    data=>{console.log(this.cmtform)}
  )
}
ajouter(post:Number){
  console.log(this.cmtform.value);
  this.ps.addcomentaire(post,1,this.cmtform.value).subscribe(
  data=>{
      this.route.navigate(['/commentpost'])
      }
   
  );

}
getcmtbypos(post:any){
  this.ps.getcmtbypost(post).subscribe(
    data=>{

    }
  )
}
  getallpost(){
    this.ps.getPost().subscribe(
      data=>{
        console.log(data)
        this.listofpost=data;
        this.isReady=true;
        for(let i of this.listofpost){
          let index=this.listofpost.indexOf(i);
          this.ps.getlike(this.listofpost[index].postId).subscribe(
            res=>{
              
              this.nbrlike[index]=res;
            }
          )
          this.ps.getdislike(this.listofpost[index].postId).subscribe(
            res=>{
              this.nbrlike[index]=res;
            }
          )
        }
      }
    )
  }
  addlike(post:Post){
    this.ps.addlike(post.postId,1,post).subscribe(
      data=>{

          this.ps.getlike(post.postId).subscribe(
            res=>{
              console.log(this.nbrlike)
              let index=this.listofpost.indexOf(post);
              console.log(index)
              this.nbrlike[index]=res;
            }
          )
          this.ps.getdislike(post.postId).subscribe(
            res=>{
              let index=this.listofpost.indexOf(post);
              this.nbrdislike[index]=res;

            }
          )
        }
    )
  }

  adddislike(post:Post){
    this.ps.addDislike(post.postId,1,post).subscribe(
      data=>{

          this.ps.getdislike(post.postId).subscribe(
            res=>{
              let index=this.listofpost.indexOf(post);
              this.nbrdislike[index]=res;

            }
          )
          this.ps.getlike(post.postId).subscribe(
            res=>{
              console.log(this.nbrlike)
              let index=this.listofpost.indexOf(post);
              console.log(index)
              this.nbrlike[index]=res;
            }
          )
        }
    )
  }
}
