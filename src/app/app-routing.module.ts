import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',redirectTo:'/auth/login',pathMatch:"full"},
  {     path:'home',
        component:HomeComponent,
        canActivate:[AuthService],
        children:[
  
          {path:'order',loadChildren:()=> import('./order/order.module').then(m => m.OrderModule)},
          {path:'product',loadChildren:()=> import('./product/product.module').then(m => m.ProductModule)},
          {path:'user',loadChildren:()=> import('./user/user.module').then(m => m.UserModule)}
        ]    
  },
  {path:'auth',loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
