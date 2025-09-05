import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { Signals } from './signals/signals';
import { ForContextualVariable } from './for-contextual-variable/for-contextual-variable';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent,Signals,ForContextualVariable,TwoWayBinding,TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 count=0

 handleIncrement(){
  this.count++
 }
 handleDecrement(){
  this.count--
 }
 handleReset(){
  this.count=0
 }
}
