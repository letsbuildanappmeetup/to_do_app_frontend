import {Component} from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {

  constructor(private todoService: TodoService) { }

  private removeAll() : void{
     this.todoService.removeAll();
  }

}
