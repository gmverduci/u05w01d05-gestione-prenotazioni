import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Todos } from 'src/app/models/todos.interface';
import { Users } from 'src/app/models/users.interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  todos: Todos[] = [];
  users: Users[] = [];
  completedTodos: Todos[] = [];

  constructor(private fbSrv: FirebaseService) {}

  ngOnInit() {
    this.fbSrv.todos$.subscribe((todos) => {
      this.todos = todos;
      this.refreshCompletedTodos();
    });

    this.fbSrv.users$.subscribe((users) => {
      this.users = users;
    });
  }

  refreshCompletedTodos() {
    this.completedTodos = this.todos.filter((todo) => todo.completed);
  }

  getUserById(userId: number): Users | undefined {
    return this.users.find((user) => user.id == userId);
  }

  updateTodo(updatedTodo: Todos) {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.refreshCompletedTodos();
    }
  }
}
