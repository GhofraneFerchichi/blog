import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { libElement } from "../../models/libElement";
import { LibElementService } from "../../services/libElement.service";

@Component({
  selector: 'app-add-lib-element',
  templateUrl: './add-lib-element.component.html',
  styleUrls: ['./add-lib-element.component.css']
})
export class AddLibElementComponent implements OnInit {
  lib: libElement = new libElement();
  libs!: libElement[];
  errorMessage: string = '';
  file!: string;
  LibForm: FormGroup

  constructor(
    public libElementService: LibElementService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.LibForm = this.fb.group({
      name:['',Validators.required],
      approved:['',Validators.required],
      rating:['',Validators.required]

    })
    this.libElementService.getLibList().subscribe((data) => {
      this.libs = data;
    });
    this.infoForm();
  }

  infoForm() {
    this.libElementService.dataForm = this.fb.group({
      name: ['', [Validators.required]],

    });
  }

  addLib() {
    const formData = new FormData();

    const lib = this.libElementService.dataForm.value;
    // formData.append('article', JSON.stringify(product));
    formData.append('lib', JSON.stringify(lib));


  }



}
