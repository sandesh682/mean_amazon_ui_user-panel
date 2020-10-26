import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GallaryComponent } from './gallary/gallary.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GallaryComponent, 
    SearchComponent, 
    FilterComponent, 
    CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers:[
    ProductService,
    CartService
  ]
})
export class ProductModule { }
