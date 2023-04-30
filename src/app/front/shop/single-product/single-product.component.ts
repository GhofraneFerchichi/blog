import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css',
  '../../../../assets/front/css/style.css',
  '../../../../assets/front/css/slick.css',
  '../../../../assets/front/css/responsive.css',
  '../../../../assets/front/css/nice-select.css',
  '../../../../assets/front/css/magnific-popup.css',
  '../../../../assets/front/css/jquery.nice-number.min.css',
  '../../../../assets/front/css/font-awesome.min.css',
  '../../../../assets/front/css/default.css',
  '../../../../assets/front/css/bootstrap.min.css',
  '../../../../assets/front/css/animate.css' 
],
  encapsulation: ViewEncapsulation.None,
})
export class SingleProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
