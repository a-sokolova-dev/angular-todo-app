import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;

  @Output() remove = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();

  removeTodo(): void {
    this.remove.emit(this.todo.id);
  }

  toggleTodo(): void {
    this.toggle.emit(this.todo.id);
  }
}
