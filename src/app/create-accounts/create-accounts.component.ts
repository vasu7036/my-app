import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent{

  constructor(private _accountService:AccountService) { }
  public accountForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
});
submit(){
  console.log(this.accountForm.value)
  this._accountService.createAccount(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("created sucsess")
      this.accountForm.reset();
    },
    (err:any)=>{
      alert("error");
    }
  )
}

}


