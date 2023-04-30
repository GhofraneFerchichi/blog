import { Component, OnInit } from '@angular/core';
import {CategoryProduct} from "../../models/category-product";
import {CategoryProductService} from "../../services/category-product.service";
import {Router} from "@angular/router";
import {libCategory} from "../../models/libCategory";
import {LibCategoryService} from "../../services/libCategory.service";

@Component({
  selector: 'app-add-libcat',
  templateUrl: './add-libcat.component.html',
  styleUrls: ['./add-libcat.component.css']
})
export class AddLibcatComponent implements OnInit {
  lib: libCategory = new libCategory();

  constructor(
    private libCategoryService: LibCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  addCategory(): void {
    this.libCategoryService.addLibCat(this.lib).subscribe(() => {
      this.router.navigate(['/listCategory']);
    });
  }

}
