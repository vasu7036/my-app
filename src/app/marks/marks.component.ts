import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent  {

 public users:any=[
  {Name:'a',Subject:'math',Marks:0,Result:'fass'},
  {Name:'b',Subject:'eng',Marks:90,Result:'pass'},
  {Name:'c',Subject:'che',Marks:45,Result:'pass'},
  {Name:'d',Subject:'tel',Marks:50,Result:'pass'},
  {Name:'c',Subject:'sic',Marks:25,Result:'fail'}

 ]
 public today=new Date();
}


