import { TodosService } from './../../service/api/todos.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operate-bar',
  templateUrl: './operate-bar.component.html',
  styleUrl: './operate-bar.component.scss'
})
export class OperateBarComponent {

  constructor(
    private todosService: TodosService
  ) {

  }

  addTodo() {
    if (this.todoInput) {
      this.todosService.addTodoElement({ title: this.todoInput, completed: true })
      this.todoInput = ''
    } else {
      return
    }
  }

  @Input()
  todoInput: string = ''

}
