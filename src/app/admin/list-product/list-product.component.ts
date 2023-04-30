import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../services/course.service";
import {SubjectService} from "../../services/subject.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {CategoryProductService} from "../../services/category-product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css',
  '../../../assets/admin/css/paper-dashboard.css',
  '../../../assets/admin/demo/demo.css',
  '../../../assets/admin/css/bootstrap.min.css',
],
encapsulation: ViewEncapsulation.None,

})
export class ListProductComponent implements OnInit {
p :number=1;
  listProduct: any;
  product: any;
  selectedProduct = null;
  show: boolean = false
  prodForm: FormGroup
  categoryForm: FormGroup
  categry: any
  categories: any
  selectedFile: File
  selectedFile1 : File
  constructor(private productService: ProductService, private categoryService: CategoryProductService, private fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      category: ['', Validators.required]
    })
    this.prodForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      pirx: ['', Validators.required],
      quantity: ['', Validators.required],
      comment: ['', Validators.required],


    })
    this.getCategoryList()
    this.getProductList();
  }
  getCategoryList() {
    this.productService.getCategoryList().subscribe(
      (res: any) => {
        this.categories = res
      }
    )
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
  onFileSelected1(event: any) {
    this.selectedFile1 = event.target.files[0];
    console.log(this.selectedFile1)
  }
  saveCategory() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('category', this.categoryForm.value.category);

    this.categoryService.saveCategory(formData).subscribe(
      (res: any) => {
        console.log(res)
        this.getCategoryList()
        Swal.fire({
          'text': 'Category Saved !',
          'icon': 'success'
        })
      }
    )
  }
  deleteCategory(id: any) {
    this.categoryService.deleteCategory(id).subscribe(
      (res: any) => {
        this.getCategoryList()
        this.getProductList()
        Swal.fire({
          'text': 'Subject Deleted Successfully !',
          'icon': 'success'
        })
      }
    )
  }
  getProductList(): void {
    this.productService.getProductList().subscribe((data: any[]) => {
      this.listProduct = data;
      console.log(this.listProduct)
    })
  }
  getProdById(id: any) {
    this.productService.getProdById(id).subscribe(
      (res: any) => {

        this.product = res
        this.prodForm.patchValue({
          name: this.product?.name,
          description: this.product?.description,
          prix: this.product?.prix,
          quantity: this.product?.quantity

        })
        this.onShow()
      }
    )
  }
  updateProduct() {

    this.productService.updateProduct(this.prodForm.value, this.product?.id).subscribe(data => {
      console.log(data);
      Swal.fire({
        'icon': 'success',
        'text': 'Updated !'
      })
      this.onShow()
      this.getProductList();
    })

  }
  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((

    ) => this.getProductList());
  }

  onShow() {
    if (this.show == true) {
      this.show = false
    } else {
      this.show = true
    }
  }
  addCategory() {
    console.log(this.prodForm.value)
    this.productService.addProduct(this.prodForm.value, 1, this.categry)
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
