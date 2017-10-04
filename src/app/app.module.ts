import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
