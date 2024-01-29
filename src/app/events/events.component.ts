import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  {

  public inputText:string='';
  public arr:string[]=[
    'vasu','afzal'
  ]

  submit(){
this.arr.push(this.inputText)
  }
  delete(i:number){
    this.arr.splice(i,1);
  }
}
