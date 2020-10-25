import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  products = []

  constructor(
    private productService:ProductService,
    private cartService:CartService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.loadData()
  }

  loadData(){

    this.productService.getProducts()
        .subscribe(response => {
          if(response['status'] == 'success'){
   
             this.products = response['data']
             
          }
        })
  }

  addToCart(product){

    this.cartService.addToCart(product['id'],product['price'],1)
        .subscribe(response => {
          if(response['status'] == 'success'){
            
            this.toastr.success(`${product['title']} has been added to cart..!`)

            //this.router.navigate(['/home/product/cart'])
          }
        })
  }

}
