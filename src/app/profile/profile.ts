import { Component } from "@angular/core";
import { createLinkedSignal } from "@angular/core/primitives/signals";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector:'profile',
    // template:'<p>i am profile</p>',
    // styles:'p{background-color:red}'
    templateUrl:'./profile.html',
    styleUrl:'./profile.css'

})

export class ProfileComponent{

    // handleEvent(event:Event){
    //     console.log("VAlue ::",(event.target as HTMLInputElement).value)
    //     console.log("Type :: ",event.type)
    // }

    // name="";
    // displayName=""

    // getName(event:Event){
    //     this.name=(event.target as HTMLInputElement).value
    //     console.log("Event ",this.name)
    // }

    // showName(){
    //     this.displayName=this.name
    // }

    userName:string|null=""
    userId:string|null=""

    constructor(private route:ActivatedRoute){
        // passing data via routerLink

        // let data=this.route.snapshot.paramMap.getAll
        // console.log("Data from pramaAll :: ",data)
        //  this.userName=this.route.snapshot.paramMap.get('name');
        //  this.userId=this.route.snapshot.paramMap.get('id')

        // getting data via button click from Home page

        this.route.queryParams.subscribe(params=>{
            this.userName=params['name']
            this.userId=params['id']
        })
    }

}