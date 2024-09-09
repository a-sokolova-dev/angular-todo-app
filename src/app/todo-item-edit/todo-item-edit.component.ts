import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item-edit.component.html',
})
export class TodoItemEditComponent {
  updatedTodo = '';

  @Input({ required: true }) todo!: Todo;

  @Output() cancel = new EventEmitter();
  @Output() edit = new EventEmitter<string>();

  cancelEdit() {
    this.cancel.emit();
  }

  submit() {
    this.edit.emit(this.updatedTodo);
  }

  ngOnInit() {
    this.updatedTodo = this.todo.todo;
  }
}
