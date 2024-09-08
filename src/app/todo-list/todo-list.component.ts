import { Component, inject } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = [];
  todoService: TodoService = inject(TodoService);

  constructor() {
    this.todos = this.todoService.getAllTodos();
  }
}
