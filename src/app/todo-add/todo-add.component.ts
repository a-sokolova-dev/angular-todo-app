import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
})
export class TodoAddComponent {
  private todoService = inject(TodoService);
  todo = '';

  addTodo() {
    if (this.todo) {
      this.todoService.addItem(this.todo);
      this.todo = '';
    }
  }
}
