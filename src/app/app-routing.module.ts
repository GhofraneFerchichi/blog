import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { HomeComponent } from './front/home/home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ListCourseComponent } from './admin/list-course/list-course.component';
import { CategoryProduct } from './models/category-product';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductsComponent } from './front/shop/products/products.component';
import { AddCourseComponent } from "./admin/add-course/add-course.component";
import { LibElmListComponent } from './admin/lib-elm-list/lib-elm-list.component';
import { ListLibcatComponent } from './admin/list-libcat/list-libcat.component';
import { AddLibElementComponent } from './admin/add-lib-element/add-lib-element.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseClientComponent } from './front/course-client/course-client.component';
import { CourseListClientComponent } from './front/course-list-client/course-list-client.component';
import {AddpostComponent} from "./admin/addpost/addpost.component";
import {ListpostComponent} from "./admin/listpost/listpost.component";
import {PostshowComponent} from "./front/postshow/postshow.component";
import { AddPostComponent } from './admin/post-managment/add-post/add-post.component';
import { PostManagmentComponent } from './admin/post-managment/post-managment.component';
import { EditPostComponent } from './admin/post-managment/edit-post/edit-post.component';

const routes: Routes = [
  { path: 'products/:id', component: SingleProductComponent },
  { path: '', component: HomeComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'shopdet', component: SingleProductComponent },
  //{path: 'cart-details', component: CartDetailsComponent},

  // {path: 'checkout', component: CheckoutComponent},
  { path: 'addProduct', component: AddProductComponent },
  { path: 'listProduct', component: ListProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'courses-client', component: CourseClientComponent },
  { path: 'courses-list/:id', component: CourseListClientComponent },

  //{path: 'order-history', component: OrderHistoryComponent},
  { path: 'addCourse', component: AddCourseComponent },

  { path: 'addCategory', component: AddcategoryComponent },
  { path: 'listCourse', component: ListCourseComponent },
  { path: 'libelem', component: LibElmListComponent },
  { path: 'libcat', component: ListLibcatComponent },
  { path: 'addlib', component: AddLibElementComponent },
  { path: 'updateCourse', component: UpdateCourseComponent },
 
  //Post Paths:
  { path: 'addPost', component: AddPostComponent },
  { path: 'listPost/editPost/:id', component: EditPostComponent },
  { path: 'listPost', component: PostManagmentComponent },
  { path: 'showpost', component: PostshowComponent },

  //{path:'favoriteProduct', component: WishListComponent},
  { path: 'listProduct/:id', component: CategoryProduct },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
