import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public accounts:any=[]
  constructor(private _accountService:AccountService) { 
    _accountService.getaccounts().subscribe(
      (data:any)=>{
        this.accounts=data;

      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

 
}
