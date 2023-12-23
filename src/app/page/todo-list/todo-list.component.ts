import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../service/models/ToDo';
import { TodosService } from '../../service/api/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {


  @Input()
  todos: Array<ToDo> = [];

  @Input()
  index: number = -1;

  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getCurrentTodos();
  }

  deleteTodo(index: number) {
    this.todoService.delTodoElement(index);
  }

  setComplete(index: number){
    this.todoService.setTodoComplete(index);
  }
}
