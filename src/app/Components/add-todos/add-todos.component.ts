import { Component ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss']
})
export class AddTodosComponent {
  title!: string;
  desc!: string;

  @Output() Add : EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  onSubmit(){
    const todo = {
      sno: +1,
      title:this.title,
      description:this.desc,
      active:true,
    }
    this.Add.emit(todo);
  }

}
