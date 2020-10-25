import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.authService.login(this.email,this.password)
        .subscribe(response =>{
          if(response['status']=='success'){
            

            alert('Welcome..!')
            sessionStorage['token'] = response['data']['token']
            
            this.router.navigate(['/home'])
            
          }
          else{
            alert(response['error'])
          }
        })
    }

}
