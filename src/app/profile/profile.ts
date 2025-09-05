import { Component } from "@angular/core";
import { createLinkedSignal } from "@angular/core/primitives/signals";


@Component({
    selector:'profile',
    // template:'<p>i am profile</p>',
    // styles:'p{background-color:red}'
    templateUrl:'./profile.html',
    styleUrl:'./profile.css'

})

export class ProfileComponent{

    handleEvent(event:Event){
        console.log("VAlue ::",(event.target as HTMLInputElement).value)
        console.log("Type :: ",event.type)
    }

    name="";
    displayName=""

    getName(event:Event){
        this.name=(event.target as HTMLInputElement).value
        console.log("Event ",this.name)
    }

    showName(){
        this.displayName=this.name
    }

}