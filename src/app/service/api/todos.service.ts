import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  currentTodos: Array<ToDo> = []

  constructor(
    private http: HttpClient
  ) { this.getTodos() }

  getTodos() {
    const productsUrl = `${this.baseUrl}todos`;
    this.http.get<Array<ToDo>>(productsUrl)
      .subscribe({
        next: (res) => {
          let tmp = res.slice(10, 20)
          this.currentTodos.push(...tmp)
        }
      });
  }

  addTodoElement(todo: ToDo): void {
    this.currentTodos.push(todo);
  }

  delTodoElement(index: number): void {
    this.currentTodos.splice(index, 1);
  }

  getCurrentTodos() {
    return this.currentTodos;
  }

  setTodoComplete(index: number) {
    this.currentTodos[index].completed = false;
  }
}
