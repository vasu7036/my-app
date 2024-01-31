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

  public term:string='';

  public column:string='';

  public order:string='';

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
  filter(){
    this._accountService.getfilteredaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
  // sort(){
  //   this._accountService.(this.column,this.order).subscribe(
  //     (data:any)=>{
  //       this.vechicles=data;
  //     },
  //     (err:any)=>{
  //       alert("error")
  //     }
  //   )

 
}
