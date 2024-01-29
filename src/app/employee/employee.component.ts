import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor() { }

  public employe:any=[
    {Sno:1,Name:'ajith',Company:'TCS',Experience:2,package:20000,workingemployee:true},
    {Sno:2,Name:'vishva',Company:'accenture',Experience:4,package:40000,workingemployee:true},
    {Sno:2,Name:'vishva',Company:'wipro',Experience:1,package:10000,workingemployee:false},
    {Sno:2,Name:'vishva',Company:'amazon',Experience:4,package:20000,workingemployee:true},
    {Sno:2,Name:'vishva',Company:'l&t',Experience:4,package:40000,workingemployee:true}
  ]
}
