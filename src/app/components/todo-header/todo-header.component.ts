import {Component ,OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit{

  private editMode : boolean = false;

  constructor(private todoService: TodoService) { 

  }
  ngOnInit(){
    this.todoService.editMode.subscribe((mode) => {
      
              mode ? this.editMode = true : this.editMode = false;
      
           });
  }
  private removeAll() : void{
     this.todoService.removeAll();
  }

}
