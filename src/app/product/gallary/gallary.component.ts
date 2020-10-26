import { CategoryService } from './../category.service';
import { CartComponent } from './../cart/cart.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  allProducts = []
  products = []
  categories = []
  category = -1

  constructor(
    private modal : NgbModal,
    private productService:ProductService,
    private cartService:CartService,
    private toastr:ToastrService,
    private router:Router,
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {

    this.loadData()
    this.loadcategoryData()
  }

  filterProducts(){
   
    this.products = []

    if(this.category == -1){
      this.products = this.allProducts
    }else{
      this.products = this.allProducts.filter(product => {

        return product.category.id == this.category
      })

      
    }
  }

  loadCart(){

    this.modal.open(CartComponent,{size:'lg'})

  }

  loadcategoryData(){

    this.categoryService
        .getCategories()
        .subscribe(response =>{
          if(response['status'] == 'success'){
            
            this.categories = response['data']
            this.categories.push({id:-1,title:'All Categories'})
          }
        })
  }

  loadData(){

    this.productService.getProducts()
        .subscribe(response => {
          if(response['status'] == 'success'){
   
             this.allProducts = response['data']
             this.filterProducts()
             
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
