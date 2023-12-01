import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  todos: Todo[] = [];
  message: string = 'Loading tasks...';

  constructor(private todoSrv: TodoService) {}

  ngOnInit() {
    setTimeout(() => {
      const todos = this.todoSrv.getTasks();
      this.todos = todos;
      if (todos.length === 0) {
        this.message = 'Oops, there are no tasks';
      }
    }, 2000);
  }
}
