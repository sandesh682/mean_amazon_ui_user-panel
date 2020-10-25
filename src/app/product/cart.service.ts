import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = `http://localhost:4000/cart`

  constructor(
    private httpClient:HttpClient
  ) { }

  getCartProducts(){

    const httpOptions = {
      headers: new HttpHeaders({token: sessionStorage['token']})
    };  
  
   return this.httpClient.get(`${this.url}`,httpOptions)
  
  }

  addToCart(productId:number,price:number,quantity:number){

    const httpOptions = {
      headers: new HttpHeaders({token: sessionStorage['token']})
    };  
  
  const body = {
    productId : productId,
    price : price,
    quantity : quantity
  }

   return this.httpClient.post(`${this.url}`,body,httpOptions)
  
  }

  deleteFromCart(id){

    const httpOptions = {
      headers: new HttpHeaders({token: sessionStorage['token']})
    }; 
    
    return this.httpClient.delete(`${this.url}/${id}`,httpOptions)

  }

  updateQuantity(newQuantity,productId,price){

    const httpOptions = {
      headers: new HttpHeaders({token: sessionStorage['token']})
    }; 

    const body = {

      price:price,
      quantity:newQuantity
    }
    
    return this.httpClient.put(`${this.url}/${productId}`,body,httpOptions)

  }
}
