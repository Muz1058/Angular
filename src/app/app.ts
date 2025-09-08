import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { Signals } from './signals/signals';
import { ForContextualVariable } from './for-contextual-variable/for-contextual-variable';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoList } from './todo-list/todo-list';
import { AngularDirectives } from './angular-directives/angular-directives';
import { Header } from './header/header';
import { Froms } from './froms/froms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent,Signals,ForContextualVariable,TwoWayBinding,TodoList,AngularDirectives,Header,Froms],
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
