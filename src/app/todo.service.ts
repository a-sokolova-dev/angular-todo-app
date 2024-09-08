import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos = [
    { id: 1, todo: 'Do something nice', completed: true },
    { id: 2, todo: 'Memorize a poem', completed: true },
    { id: 3, todo: 'Watch a classic movie', completed: true },
    { id: 4, todo: 'Watch a documentary', completed: false },
    { id: 5, todo: 'Invest in cryptocurrency', completed: false },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
