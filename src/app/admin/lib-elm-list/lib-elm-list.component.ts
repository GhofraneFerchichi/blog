import { Component, OnInit } from '@angular/core';
import {CategoryProduct} from "../../models/category-product";
import {CategoryProductService} from "../../services/category-product.service";
import {libElement} from "../../models/libElement";
import {LibElementService} from "../../services/libElement.service";

@Component({
  selector: 'app-lib-elm-list',
  templateUrl: './lib-elm-list.component.html',
  styleUrls: ['./lib-elm-list.component.css']
})
export class LibElmListComponent implements OnInit {

  listLib : any;
  selectedCategory =null;
  constructor(private libElementService:LibElementService) { }

  ngOnInit(): void {
    return this.getAllLib();
  }
  getAllLib(): void {
    this.libElementService.getLibList().subscribe((data:libElement[])=>{
      this.listLib=data;
      console.log(this.listLib)
    })
  }


  remove(id: any):void {
    this.libElementService.deleteLib(id).subscribe(()=>  (this.listLib=this.listLib.filter((t:any)=>t.id !==id)));
  }




}
