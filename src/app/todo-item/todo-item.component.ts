import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { TodoItemEditComponent } from '../todo-item-edit/todo-item-edit.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodoItemEditComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  isEditing = false;

  @Input({ required: true }) todo!: Todo;

  @Output() remove = new EventEmitter<string>();
  @Output() toggle = new EventEmitter<string>();
  @Output() update = new EventEmitter<Todo>();

  removeTodo(): void {
    this.remove.emit(this.todo.id);
  }

  toggleTodo(): void {
    this.toggle.emit(this.todo.id);
  }

  toggleToItemEdit() {
    this.isEditing = true;
  }

  cancelItemEdit() {
    this.isEditing = false;
  }

  editItem(updatedTodo: string) {
    this.isEditing = false;
    this.update.emit({ ...this.todo, todo: updatedTodo });
  }
}
