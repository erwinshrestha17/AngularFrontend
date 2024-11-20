import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../../Core/Services/Auth/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=''
  password:string=''
  constructor(private authservice:AuthService) {}

  login(){
    this.authservice.login(this.email,this.password).subscribe(
      {
        next:(token)=>{
          localStorage.setItem('token',token)
          console.log("Logged In Successfully")
        },error:(err)=>{
          console.log("Log in failed ❗❗" , err)
        }
      }
    )
  }

}
