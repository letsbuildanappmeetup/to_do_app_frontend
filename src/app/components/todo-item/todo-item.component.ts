import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input()
  private todo: Todo;
  private editMode : boolean = false;

  constructor(private todoService: TodoService) { 
     
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
  private editTodo() : void{
    this.editMode = true;
  }
  private cancelEdit() : void{
    this.editMode = false;
  }
  private saveEdit (text:string,id:number): void {
    console.log(text);
    this.todoService.saveEdit(text , id );
    this.editMode = false;
  }
  
  private addRemoveTodoToDelete(): void {
    this.todoService.addRemoveTodoToDelete(this.todo.id);
  }

}
