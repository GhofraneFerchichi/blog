import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileDB } from 'src/app/models/fileDB';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public postform: FormGroup;
  currentFile: any;
  selectedFiles: FileList ;
  file: FileDB;
  post:Post;
  constructor(private ps:PostServiceService,private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.postform = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      file: [null, Validators.required],
  });

  this.postform.valueChanges.subscribe(
    data=>{console.log(this.postform)}
  )
}
ajouter(){
  console.log(this.postform.value);
  this.ps.ajoutPost(this.postform.value).subscribe(
  data=>{
    console.log('ssss',data)
    this.post=data;
    this.ps.affecterfileaupost(this.post.postId,this.file.id,this.post).subscribe(
      res=>{
       //this.listfile=res;
     
       this.router.navigate(["/listPost"])
      }
   
  );
 }
);
  
}
selectFile(event:any) {
  this.selectedFiles = event.target.files;
}

  upload() :FileDB{
    this.currentFile = this.selectedFiles.item(0);
    console.log(this.selectedFiles)
    console.log(this.currentFile)
    this.ps.upload(this.currentFile).subscribe(
    
      event => {
        
                 console.log("file",event)
        
          this.ps.getFilesdetail(event).subscribe(
            data=>{
              this.file=data;
              console.log('file',this.file)
                     
              
            }
          );
    
        
      }
     );
    return this.file;
  }
}
