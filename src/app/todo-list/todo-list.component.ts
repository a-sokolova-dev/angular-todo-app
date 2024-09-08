import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  mockTodo: Todo = {
    id: 0,
    todo: 'test todo',
    completed: true,
  };
}
