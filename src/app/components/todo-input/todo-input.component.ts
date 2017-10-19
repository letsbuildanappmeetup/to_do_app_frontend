import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {

  public todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  private addTodo(): void {
    // trims the value from input of spaces and checks if input is empty before saving todo 
    if( this.todoText.trim() != '' ){
      this.todoService.addTodo(this.todoText);
      this.todoText = '';
    }
  
  }
}
