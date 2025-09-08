import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-froms',
  imports: [ReactiveFormsModule],
  templateUrl: './froms.html',
  styleUrl: './froms.css'
})
export class Froms {

// basic reactive form
// name=new FormControl();
// password=new FormControl()


// reactive form with grouping

profileform=  new FormGroup({
  name:new FormControl(),
  password:new FormControl(),
  email:new FormControl(),
})

onSubmit(){
  console.log("Fun called");
  
}





}
