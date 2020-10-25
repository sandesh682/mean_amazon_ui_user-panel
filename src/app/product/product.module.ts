import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GallaryComponent } from './gallary/gallary.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [GallaryComponent, SearchComponent, FilterComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }