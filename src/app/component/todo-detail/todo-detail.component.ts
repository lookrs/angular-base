import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../service/models/ToDo';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(900)),
    ]),
  ],
})
export class TodoDetailComponent {

  cardState: string = 'visible';

  @Input()
  todo: ToDo = {}

  @Input()
  idx: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  complete: EventEmitter<number> = new EventEmitter<number>();

  deleteTodo() {
    console.log(this.idx)
    this.delete.emit(this.idx);
  }

  setTodoComplete() {
    this.complete.emit(this.idx)
  }
}
