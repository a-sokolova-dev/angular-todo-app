import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos = [
    {
      id: '36b8f84d-df4e-4d49-b662-bcde71a8764f',
      todo: 'Do something nice',
      completed: true,
    },
    {
      id: 'f745e8fe-f4f3-4a40-a5cd-67bd802f8960',
      todo: 'Memorize a poem',
      completed: true,
    },
    {
      id: 'd8bc8761-c82b-47d3-96dc-58b910aab861',
      todo: 'Watch a classic movie',
      completed: true,
    },
    {
      id: '174f1898-3ea4-4334-8d33-5c7c27650c7d',
      todo: 'Watch a documentary',
      completed: false,
    },
    {
      id: 'ce1450e7-cba4-4b1e-970c-76737053db45',
      todo: 'Invest in cryptocurrency',
      completed: false,
    },
  ];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addItem(todo: string): void {
    const todoItem: Todo = {
      id: crypto.randomUUID(),
      todo,
      completed: false,
    };
    this.todos.push(todoItem);
  }

  removeItemById(id: string): void {
    const todoToRemoveIdx = this.todos.findIndex((t) => t.id === id);
    this.todos.splice(todoToRemoveIdx, 1);
  }

  updateItemStatusById(id: string): void {
    const todoToUpdate = this.todos.find((t) => t.id === id);
    if (!todoToUpdate) return;
    todoToUpdate.completed = !todoToUpdate.completed;
  }

  updateItem(updated: Todo): void {
    const todoToUpdateIdx = this.todos.findIndex((t) => t.id === updated.id);
    this.todos[todoToUpdateIdx] = { ...updated };
  }
}
