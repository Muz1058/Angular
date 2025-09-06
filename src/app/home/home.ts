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
}
