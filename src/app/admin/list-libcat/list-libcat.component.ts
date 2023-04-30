import { Component, OnInit } from '@angular/core';
import {CategoryProduct} from "../../models/category-product";
import {CategoryProductService} from "../../services/category-product.service";
import {libCategory} from "../../models/libCategory";
import {LibCategoryService} from "../../services/libCategory.service";

@Component({
  selector: 'app-list-libcat',
  templateUrl: './list-libcat.component.html',
  styleUrls: ['./list-libcat.component.css']
})
export class ListLibcatComponent implements OnInit {

  listCategory : Array<libCategory>=[];
  selectedCategory =null;
  constructor(private libCategoryService:LibCategoryService) { }

  ngOnInit(): void {
    return this.getAllCategories();
  }
  getAllCategories(): void {
    this.libCategoryService.getLibCatList().subscribe((data:libCategory[])=>{
      this.listCategory=data;
    })
  }


  remove(id: number):void {
    this.libCategoryService.deleteLibCat(id).subscribe(()=>  (this.listCategory=this.listCategory.filter((t)=>t.id !==id)));
  }




}
