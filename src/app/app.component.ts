import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoService: TodoService) {
  }
}
