import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });

  constructor(private _loginSrvice:LoginService,private _router:Router) { }

  login(){
    console.log(this.loginForm.value)
    this._loginSrvice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("sucess")
        localStorage.setItem("myapp-token",data.token)
        this._router.navigateByUrl("/dashboard")
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
  logout(){
    localStorage.removeItem("myapp-token")
    this._router.navigateByUrl("/login");

  }
}
