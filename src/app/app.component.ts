import {Component, OnInit} from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private todoService: TodoService) {
    }

    ngOnInit(): void {
        this.todoService.init();
    }
}
