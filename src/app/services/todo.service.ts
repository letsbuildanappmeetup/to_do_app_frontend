import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;
  private todosToDelete: number[];

  constructor() {
    this.todos = [
      new Todo(0, "Practice more on ES6!"),
      new Todo(1, "Learn to make an Angular app!"),
      new Todo(2, "Learn to make a React app!")
    ];
    this.todosToDelete = [];
    this.nextId = 3;
  }

  public addTodo(text: string): void {
    let todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id != id);

  }
  public addRemoveTodoToDelete(id: number): void {

    // checks if the todo to delete is not already in the array 
    if (this.todosToDelete.indexOf(id, 0) === -1) {
      // if not it pushes it in 
      this.todosToDelete.push(id);
    } else {

      // otherwise it deletes it from the array
      let index = this.todosToDelete.indexOf(id, 0);
      if (index > -1) {
        this.todosToDelete.splice(index, 1);
      }

    }
  }
  public removeAll(): void {

    this.todosToDelete.map((value, index) => {
      this.todos = this.todos.filter((todo) => { return todo.id !== value });
    })
  }
  public saveEdit(text : string, id : number): void {
    this.todos.map((todo, index) => {
       todo.id === id ? todo.text = text : null ;
    })
    console.log(this.todos);

  }
}
