import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  url = `http://localhost:4000/user`

  constructor(private router:Router,
              private httpClient:HttpClient) { }


  login(email:string,password:string){

    const body = {
      email:email,
      password:password
    }

    return this.httpClient.post(this.url+'/signIn',body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(sessionStorage['token']){
      return true
    }
    
    this.router.navigate(['/auth/login'])

    return false
  }
}
