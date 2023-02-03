import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  localItem : string;
  todos: Todo[];
 
  constructor(){
    this.localItem = localStorage.getItem('todos')!;

    if(this.localItem === null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void{

  }

  deleteTask(todo: Todo){
    console.log(todo.title)

    //let take index of an todo array
    //here todo is the element of an array todos
    let index = this.todos.indexOf(todo)

    //remove that specific element wrt the current index
    this.todos.splice(index,1);

    //update the current state of todos array in localstorage
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  addTask(todo: Todo){
    console.log(todo)
    //Add that specific element
    this.todos.push(todo);
    //update the current state of todos array in localstorage
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleClass(todo: Todo){
     //let take index of an todo array
    //here todo is the element of an array todos
    let index = this.todos.indexOf(todo)

    //toggle the active attribute for that specific element wrt the current index
    this.todos[index].active = !this.todos[index].active;

    //update the current state of todos array in localstorage
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
