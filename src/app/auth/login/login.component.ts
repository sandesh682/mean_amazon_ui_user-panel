import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){

    if(this.email.length == 0){
      this.toastr.error('Please enter email')
    }
    else if(this.password.length == 0){
      this.toastr.error('Please enter password')
    }
    else{
      this.authService.login(this.email,this.password)
      .subscribe(response =>{
        if(response['status']=='success'){
          
          sessionStorage['token'] = response['data']['token']
         
          this.toastr.success(`Welcome ${response['data']['firstName']} to myStore`)
          this.router.navigate(['/home'])
          
        }
        else{
          alert(response['error'])
        }
      })
    }
    }

}
