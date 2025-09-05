import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  tasks=""
  taskList :{id:number,tasks:string}[]=[]

  addTask(task:string){
    this.taskList.push({id:this.taskList.length+1,tasks:task})

    this.tasks="",
    console.log(this.taskList)
  }

  deleteTask(taskId:number){
    this.taskList=this.taskList.filter(item=>item.id!=taskId)
  }

}
