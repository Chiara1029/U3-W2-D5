import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  currentId = 1;
  title = '';
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

  addTask(inputTask: any) {
    if (inputTask.valid) {
      setTimeout(() => {
        this.todos.push({
          id: this.currentId++,
          title: this.title,
          completed: false,
        });
        this.title = '';
        console.log(this.todos);
      }, 2000);
    }
  }

  completedTask(id: number, i: number) {
    setTimeout(() => {
      this.todoSrv.updateTasks({ completed: true }, id);
      this.todos.splice(i, 1);
      console.log(this.todos);
    }, 2000);
  }

  deleteTask(id: number) {
    setTimeout(() => {
      this.todos.splice(id - 1, 1);
      console.log(this.todos);
    }, 2000);
  }

  ngDoCheck() {
    setTimeout(() => {
      this.message = 'Loading tasks...';
      const todos = this.todoSrv.getTasks();
      this.todos = todos;
      if (todos.length === 0) {
        this.message = 'Oops, there are no tasks';
      }
    }, 2000);
  }
}
