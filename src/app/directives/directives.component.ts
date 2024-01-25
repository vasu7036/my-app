import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[]=[20,30,50];
  public states:string[]=["ts","ap","tn"];
  public users:any=[
    {name:'abc',age:20,phone:235123},
    {name:'def',age:20,phone:235123},
    {name:'ghi',age:20,phone:235123},
    {name:'xyz',age:20,phone:235123}
  ]
}
