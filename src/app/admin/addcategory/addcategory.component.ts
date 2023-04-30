import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryProduct } from 'src/app/models/category-product';
import { CategoryProductService } from 'src/app/services/category-product.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: [
    './addcategory.component.css',
    '../../../assets/admin/css/paper-dashboard.css',
    '../../../assets/admin/demo/demo.css',
    '../../../assets/admin/css/bootstrap.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AddcategoryComponent implements OnInit {
  category: CategoryProduct = new CategoryProduct();

  constructor(
    private categoryService: CategoryProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addCategory(): void {
    this.categoryService.saveCategory(this.category).subscribe(() => {
      this.router.navigate(['/listCategory']);
    });
  }
}

