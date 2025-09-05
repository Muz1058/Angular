import { Component, computed, effect, signal, WritableSignal,Signal } from '@angular/core';
import { createLinkedSignal } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {

  count=signal(10)

  // constructor(){
  //   effect(()=>{
  //     console.log("Value ::" ,this.count());
  //     console.log("data value :: ",this.data())

  //   })
  // }

  data:WritableSignal<number|String>=signal(100)

  updateSignal(){
    this.data.set("Hello")
  }

  updataData(){
    this.data.set("Hello")
  }

  x=signal(10)
  y=signal(20)

  z=computed(()=>this.x()+this.y());

 
}
