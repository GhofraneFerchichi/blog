import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CategoryProduct } from 'src/app/models/category-product';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css',
  '../../../assets/admin/css/paper-dashboard.css',
  '../../../assets/admin/demo/demo.css',
  '../../../assets/admin/css/bootstrap.min.css',
],
encapsulation: ViewEncapsulation.None,
})
export class UpdateProductComponent implements OnInit {
  product: Product = new Product();
  products!: Product[];
  errorMessage: string = '';
  file!: string;


  constructor(
    public productService: ProductService,
    private router: Router,
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
    this.infoForm();
  }

  infoForm() {
    this.productService.dataForm = this.fb.group({
      name: [''],
      description: [''],
      prix: [''],
      quantity: [''],



    });
  }

  addProduct() {
    const formData = new FormData();

    const product = this.productService.dataForm.value;
    // formData.append('article', JSON.stringify(product));
    formData.append('product', JSON.stringify(product));


  }
}










