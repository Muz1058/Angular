import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-froms',
  imports: [ReactiveFormsModule],
  templateUrl: './froms.html',
  styleUrl: './froms.css'
})
export class Froms {
name=new FormControl();
password=new FormControl()





}
