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

  restoreTask(id: number, i: number) {
    setTimeout(() => {
      this.todoSrv.updateTasks({ completed: false }, id);
      this.todos.splice(i, 1);
      let todos = this.todos;
      if (todos.length === 0) {
        this.message = 'Oops, there are no tasks';
      }
    }, 2000);
  }

  deleteTask(id: number) {
    setTimeout(() => {
      for (let i = 0; i < this.todos.length; i++) {
        if (id == this.todos[i].id) {
          this.todos.splice(i, 1);
        }
      }
      if (this.todos.length === 0) {
        this.message = 'Oops, there are no tasks';
      }
    }, 2000);
  }
}
