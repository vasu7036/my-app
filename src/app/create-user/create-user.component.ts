import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor() { }
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    pnone: new FormControl(),
    address: new FormGroup({
      hno: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    cards: new FormArray([])
  })

  get cardsFormAarry() {
    return this.userForm.get('cards') as FormArray;
  }

  add() {
    this.cardsFormAarry.push(
      new FormGroup({
        cardno: new FormControl(),
        expairy: new FormControl(),
        cvv: new FormControl()
      })
    )
  }
  deletecard(i:number){
    this.cardsFormAarry.removeAt(i);
  }

  submit() {
    console.log(this.userForm)
  }

}
