import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProduct } from 'src/app/models/category-product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Product } from 'src/app/models/product';
import {CourseService} from "../../services/course.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: [
    './add-product.component.css',
    '../../../assets/admin/css/paper-dashboard.css',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AddProductComponent implements OnInit {
  product: any
  products: any
  selectedFile: File;
  categories: any
  selectedFile1: File;


  errorMessage: string = '';
  file!: string;
  prodForm: FormGroup
  prodCat: any
  category: any
  constructor(
    private prodcutService: ProductService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.prodForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      quantity: ['', Validators.required],
    })
    this.getAllProducts()
    this.getAllProdCat()
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  onFileSelected1(event: any) {
    this.selectedFile1 = event.target.files[0];
    console.log(this.selectedFile1)
  }
  getAllProducts() {
    this.prodcutService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }
  getAllProdCat() {
    this.prodcutService.getCategoryList().subscribe(
      (res: any) => {
        this.categories = res
      }
    )
  }
  addProduct() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('name', this.prodForm.value.name);
    formData.append('description', this.prodForm.value.description);
    formData.append('prix', this.prodForm.value.prix);
    formData.append('quantity', this.prodForm.value.quantity);

    this.prodcutService.addProduct(formData, 1, this.category)
      .subscribe((res: any) => {
        console.log(res)
        Swal.fire({
          'icon': 'success',
          'text': 'Course added successfully !'
        })
        this.router.navigateByUrl("/listProduct")
      }, err => {
        Swal.fire({
          'icon': 'error',
          'text': 'Missed Informations !'
        })
      })

  }
  onSelectCategory(event: any) {
    this.category = event.target.value
    console.log(this.category)
  }
}


