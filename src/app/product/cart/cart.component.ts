import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

products = []
total_amount = 0

  constructor(
    private cartService:CartService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){

    this.cartService.getCartProducts()
        .subscribe(response =>{
          if(response['status'] == 'success'){
              this.products = response['data']
              
              this.total_amount = 0
              this.products.forEach(product=>{
                 this.total_amount += parseFloat(product.price) * parseFloat(product.quantity)
              })
          }
        })
  }

  onDelete(product){

    this.cartService.deleteFromCart(product['productId'])
        .subscribe(response => {
          if(response['status'] == 'success'){
            
            this.toastr.info(`${product.title} deleted successfully from cart.`)
            this.loadData()
          }
        })
  }

  updateQuantity(change_count,product){

    const new_quantity = change_count + product['quantity']
    
    if(new_quantity == 0){
          this.onDelete(product)
    }else{
      this.cartService.updateQuantity(new_quantity,product['productId'],product['price'])
          .subscribe(response => {
            if(response['status'] == 'success'){
              this.toastr.success('Quantity updated')
              this.loadData()
            }
            else{
              this.toastr.error(response['error'])
            }
          })
    }

    
  }

}
