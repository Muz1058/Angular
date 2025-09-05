import { Component } from '@angular/core';
import { CommonModule  } from "@angular/common";


@Component({
  selector: 'app-angular-directives',
  imports: [CommonModule],
  templateUrl:'./angular-directives.html',
  styleUrl: './angular-directives.css'
})
export class AngularDirectives {
students=['a','b','c','d']


studentData=[
  {
      name:'ali',
      age:'1',
  },
  {
      name:'ab',
      age:'12',
  },
  {
      name:'bc',
      age:'23',
  },
  {
      name:'cd',
      age:'34',
  }
]

categories = [
  { name: 'Fruits', items: ['Apple', 'Banana'] },
  { name: 'Vegetables', items: ['Carrot', 'Potato'] }
];

num=1;


}
