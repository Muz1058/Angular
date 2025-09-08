import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router:Router){
    

  }

  goTOProfile(name:string,id:string){
    this.router.navigate(['profile'],{queryParams:{name,id}})
  }
//dynamic routing
  users=[
    {
      name:"Ali",
      id:"1",
      age:'20',
      email:'ali@gmail.com'
    },
    {
      name:"Ahmad",
      id:"2",
      age:'21',
      email:'ahmad@gmail.com'
    },
    {
      name:"Anas",
      id:"3",
      age:'22',
      email:'anas@gmail.com'
    },
    {
      name:"Abd",
      id:"4",
      age:'23',
      email:'abd@gmail.com'
    }
  ]
}
