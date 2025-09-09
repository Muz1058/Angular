import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-froms',
  imports: [ReactiveFormsModule,NgIf,FormsModule,NgIf],
  templateUrl: './froms.html',
  styleUrl: './froms.css'
})
export class Froms {

// basic reactive form
// name=new FormControl();
// password=new FormControl()


// reactive form with grouping

profileform=  new FormGroup({
  name:new FormControl('',[Validators.required,Validators.max(50),Validators.min(5)]),
  password:new FormControl('',[Validators.required,Validators.max(50),Validators.min(5)]),
  email:new FormControl('',[Validators.required,Validators.max(50),Validators.min(5)]),
})

onSubmit(){
  console.log("Fun called");
  
}

get name(){
  return this.profileform.get('name')
}
get password(){
  return this.profileform.get('password')
}
get email(){
  return this.profileform.get('email')
}


//Templete driven form

details:any;
viewDetails(val:NgForm){
  console.log(val);
  this.details=val;
  console.log(this.details);
  
  

}





}
