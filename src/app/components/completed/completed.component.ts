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

  constructor(private todoSrv: TodoService) {}

  async ngOnInit() {
    const todos = await this.todoSrv.getTasks();
    this.todos = todos;
  }
}
