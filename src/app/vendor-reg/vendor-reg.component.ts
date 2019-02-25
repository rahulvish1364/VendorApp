import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray} from "@angular/forms";
@Component({
  selector: 'app-vendor-reg',
  templateUrl: './vendor-reg.component.html',
  styleUrls: ['./vendor-reg.component.css']
})
export class VendorRegComponent implements OnInit {

  public regForm : FormGroup;
  constructor(private formbuilder : FormBuilder) { }


  ngOnInit() {

    const contact= this.formbuilder.group({
       address: '',
       phNumber : 0,
       city: '',
      })
     const event = this.formbuilder.group({
       birthday: false,
       marriage: false,
       musicevent: false,
       corporatemeeting: false,
     })

     const rating = Number;
     this.regForm= this.formbuilder.group({
      userName : '',
      email : '',
      // password: '',
      contact: contact,
      event : event,
      food: this.formbuilder.array([]), 
      decoration: this.formbuilder.array([]),
      venue : this.formbuilder.array([]),
      // rating: Number 
     })
  }
  get foodForm(){
    return this.regForm.get('food') as FormArray
  }
  addFood(){
    const food = this.formbuilder.group({
      foodName: [],
      price: []
    })
     this.foodForm.push(food);
  }
  deleteFood(i){
    this.foodForm.removeAt(i);
  }
  get decorForm(){
    return this.regForm.get('decoration') as FormArray
  }
  addDecor(){
    const decoration = this.formbuilder.group({
      name : '',
      address: '',
      price: 0,
      imageUrl: ''
    })
    this.decorForm.push(decoration);
  }
  deleteDecor(i){
    this.decorForm.removeAt(i);
  }
  ///////////////////////////////////////////////
  get VenueForm(){
    return this.regForm.get('venue') as FormArray
  }

  addVenue(){
    const venue = this.formbuilder.group({
      address: '',
      price: 0,
      min: 0,
      max : 0,
      imageUrl: ''
    })
    this.VenueForm.push(venue);
  }
  
  deleteVenue(i){
    this.VenueForm.removeAt(i);
  }

}
