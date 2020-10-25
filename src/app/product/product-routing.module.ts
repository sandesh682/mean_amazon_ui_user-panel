import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  
  {path:'cart',component:CartComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'filter',component:FilterComponent},
  {path:'search',component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
