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

  constructor(private todoSrv: TodoService) {}

  async ngOnInit() {
    const todos = await this.todoSrv.getTasks();
    this.todos = todos;
  }

  addTask(inputTask: any) {
    if (inputTask.valid) {
      this.todos.push({
        id: this.currentId++,
        title: this.title,
        completed: false,
      });
      this.title = '';
    }
  }

  completedTask(id: number, i: number) {
    this.todoSrv.updateTasks({ completed: true }, id);
    this.todos.splice(i, 1);
  }
}
