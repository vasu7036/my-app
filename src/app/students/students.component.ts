import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  {

  public information:any=[];
  public filter:string='';
  public column: string='';
  public order: string='';
  public page:number=0;

  constructor(private _studentService:StudentService) {
  _studentService.getstudentDetails().subscribe(
    (data:any)=>{
      this.information = data;

    },
    (err:any)=>{
      alert("inernal server error");


    }
  )
  }
  filterFunc(){
    this._studentService.getstudentDetails().subscribe(
      (data:any)=>{
        this.information = data
  
      },
      (err:any)=>{
  
      }
    )
  
  }

 
}

