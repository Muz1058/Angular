import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  userName=""

  onUserChange(val:string){
    this.userName=val
  }

  //child to parent

  users:undefined|string;
  handleUsers(users:string){
    console.log(users);
    this.users=users
    
  }

}
