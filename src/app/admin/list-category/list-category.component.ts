import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryProduct } from 'src/app/models/category-product';
import { CategoryProductService } from 'src/app/services/category-product.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css',
  '../../../assets/admin/css/paper-dashboard.css',
  '../../../assets/admin/demo/demo.css',
  '../../../assets/admin/css/bootstrap.min.css',],
  encapsulation: ViewEncapsulation.None,

})
export class ListCategoryComponent implements OnInit {

  listCategory : Array<CategoryProduct>=[];
  selectedCategory =null;
  constructor(private categoryService:CategoryProductService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.categoryService.getProductCategories().subscribe((data:CategoryProduct[])=>{
      this.listCategory=data;
    })
  }
 

  remove(id: number):void {
    this.categoryService.deleteCategory(id).subscribe(()=>  (this.listCategory=this.listCategory.filter((t)=>t.id !==id)));
}



}

