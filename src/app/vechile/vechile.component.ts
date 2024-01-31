import { Component, OnInit } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {
  public vechicles:any = [];

  public term:string='';

  public column:string='fuel';

  public order:string='desc';

  public page:number= 0;

  constructor(private _vechicleService:VechileService) {
    _vechicleService.getvechicles().subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (er:any)=>{
        alert("internal server error");
      },
     
    )
   }
   delete(id:string){
    this._vechicleService.deletevechile(id).subscribe(
      (data:any)=>{
              alert(data.Vechile+"deleted success");
              location.reload()
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
  filter(){
    this._vechicleService.getfilteredvechicles(this.term).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
  sort(){
    this._vechicleService.getsortedvechicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
  pagenation(){
    this._vechicleService.getpageedvechicles(this.page).subscribe(
      (data:any)=>{
        this.vechicles=data;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }

  

}
