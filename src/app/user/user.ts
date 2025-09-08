import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  userName:string|null=null
  userId:string|null=null
  userAge:string|null=null
  userEmail:string|null=null
  constructor(private route:ActivatedRoute){
    route.params.subscribe(params=>{
      this.userName=params['name']
      this.userId=params['id']

    })
  }

}
