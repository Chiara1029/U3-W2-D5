import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {}

  updateTasks(data: Partial<Todo>, id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id == id ? { ...todo, ...data } : todo
    );
    return this.todos.find((todo) => todo.id == id) as Todo;
  }

  getTasks() {
    return this.todos;
  }
}
