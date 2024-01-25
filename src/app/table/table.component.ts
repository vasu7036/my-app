import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  public add:any={sNo:6, name:"",price:0,rating:0, delivery:false}
  
  public users:any=[
    {sNo:1, name:"pen", price:10,rating:3,delivery:false},
    {sNo:2, name:"phone", price:100,rating:2,delivery:false},
    {sNo:3, name:"shirt", price:400,rating:3,delivery:true},
    {sNo:4, name:"cap", price:200,rating:4,delivery:false},
    {sNo:5, name:"remote", price:500,rating:1,delivery:false},
  ]
  ascend(){
  this.users=this.users.sort((a:any,b:any)=>a.price-b.price)
  }
  decend(){
    this.users=this.users.sort((a:any,b:any)=>b.price-a.price)
  }
  rating(){
    this.users=this.users.sort((a:any,b:any)=>a.rating-b.rating)
    }
    rating2(){
      this.users=this.users.sort((a:any,b:any)=>b.rating-a.rating)
      }
    filter(){
      this.users=this.users.filter((user:any)=>user.name.includes())
    }
    discount(){
      this.users=this.users.map((user:any)=>{
        user.price = user.price/2;
        return user;
      })
    }
    total(){
      let totalprice = this.users.reduce((sum:any,user:any)=>sum+user.price,0);
      alert(totalprice);
    }
    freedeliveri(){
      this.users=this.users.filter((user:any)=>user.delivery==true);
    }
    additonalcharge(){
      this.users=this.users.map((user:any)=>{
        return{...user,price:(user.price)+10}
      })
    }
    cartitems(){
      alert(this.users.length)
    }
    additems(){
     this.users.push({...this.add});
    }
    delete(i:number){
      this.users.splice(i,1);
    }
}
