import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

   public a:number=0;
   public b:number=0;
   public result:number=0;
   add(){
       this.result=this.a+this.b
   }
   sub(){
    this.result=this.a-this.b
}

  

}
