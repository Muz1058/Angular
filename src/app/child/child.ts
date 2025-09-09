import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
@Input() user:string=''

@Output() getUsers=new EventEmitter()


Users=['a','b','c','d']
ngOnInit(){
  this.getUsers.emit(this.Users)
}

}
