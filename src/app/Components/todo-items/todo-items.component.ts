import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Input() i! : number;
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  
  onClick(todo : Todo){
    this.delete.emit(todo);
    console.log("button is clicked!!");
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckBox.emit(todo);
  }
}
