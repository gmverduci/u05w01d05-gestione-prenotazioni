
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { Users } from 'src/app/models/users.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todos;
  @Input() user!: Users;
  @Output() todoCompleted = new EventEmitter<Todos>();
 
  constructor() {}
 
  ngOnInit(): void {}
 
  toggleCompleted() {
    this.todo.completed = !this.todo.completed;
    this.todoCompleted.emit(this.todo);
  }
 }
