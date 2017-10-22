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
  private editMode: Boolean = false;
  //private editModeOn : Boolean = false;


  constructor(private todoService: TodoService) { 

     
  }
  
  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
  private editTodo() : void{
    this.editMode = true;
    this.todoService.editMode.next(true);
  }
  private cancelEdit() : void{
    this.editMode = false;
    this.todoService.editMode.next(false);
  }
  private saveEdit (text:string,id:number): void {
    console.log(text);
    this.editMode = false;
    this.todoService.saveEdit(text , id );
    
    this.todoService.editMode.next(false);
  }
  
  private addRemoveTodoToDelete(): void {
    this.todoService.addRemoveTodoToDelete(this.todo.id);
  }

}
