import { ListProductComponent } from './admin/list-product/list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCourseComponent } from './admin/list-course/list-course.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { FooterComponent } from './front/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { WishListService } from './services/wish-list.service';
import { NavComponent } from './admin/nav/nav.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './front/shop/products/products.component';
import {AddCourseComponent} from "./admin/add-course/add-course.component";
import { AddLibElementComponent } from './admin/add-lib-element/add-lib-element.component';
import { LibElmListComponent } from './admin/lib-elm-list/lib-elm-list.component';
import { AddLibcatComponent } from './admin/add-libcat/add-libcat.component';
import { ListLibcatComponent } from './admin/list-libcat/list-libcat.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseClientComponent } from './front/course-client/course-client.component';
import { CourseListClientComponent } from './front/course-list-client/course-list-client.component';
import { AddpostComponent } from './admin/addpost/addpost.component';
import { ListpostComponent } from './admin/listpost/listpost.component';
import { PostshowComponent } from './front/postshow/postshow.component';
import { PostcommentComponent } from './front/postcomment/postcomment.component';
import { PostManagmentComponent } from './admin/post-managment/post-managment.component';
import { AddPostComponent } from './admin/post-managment/add-post/add-post.component';
import { EditPostComponent } from './admin/post-managment/edit-post/edit-post.component';
import { CommentManagmentComponent } from './front/comment-managment/comment-managment.component';



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductComponent,
    SingleProductComponent,
    CategoryProductComponent,
    AddProductComponent,
    AddcategoryComponent,
    DashboardComponent,
    ListCourseComponent,
    NavbarComponent,
    SidebarComponent,
    UpdateProductComponent,
    FooterComponent,
    NavComponent,
    AddCourseComponent,
    ProductsComponent,
    AddLibElementComponent,
    LibElmListComponent,
    AddLibcatComponent,
    ListLibcatComponent,
    UpdateCourseComponent,
    CourseClientComponent,
    CourseListClientComponent,
    AddpostComponent,
    ListpostComponent,
    PostshowComponent,
    PostcommentComponent,
    PostManagmentComponent,
    AddPostComponent,
    EditPostComponent,
    CommentManagmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),


  ],
  providers: [ProductService,WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
