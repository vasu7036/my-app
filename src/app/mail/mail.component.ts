import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent  {
public mail: any =[]
  constructor(private _mailservice:MailService) {
    _mailservice.getmail().subscribe(
      (data:any)=>{
        this.mail=data
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
   }

  

}
