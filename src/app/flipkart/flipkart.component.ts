import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent  {
  public flipkart:any = [];

  constructor(private _FlipkartService:FlipkartService) { 
    _FlipkartService.getflipkart().subscribe(
      (data:any)=>{
        this.flipkart=data;
      },
      (err:any)=>{
        alert("inetrnal service error")
      }
    )
  }

 
}
