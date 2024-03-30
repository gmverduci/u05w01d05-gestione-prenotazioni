import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todos } from 'src/app/models/todos.interface';
import { Users } from 'src/app/models/users.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  todos: Todos[] = [];
  users: Users[] = [];
  todoByUser: { user: Users; userTodos: Todos[] }[] = [];
 
  constructor(private fbSrv: FirebaseService) {}
 
  ngOnInit() {
    combineLatest([
      this.fbSrv.todos$,
      this.fbSrv.users$
    ]).pipe(
      map(([todos, users]) => {
        this.todos = todos;
        this.users = users;
        this.createTodoByUserArray();
      })
    ).subscribe();
  }
 
  createTodoByUserArray() {
    this.todoByUser = [];
    this.users.forEach((user) => {
      const userTodos = this.todos.filter((todo) => todo.userId == user.id);
      if (userTodos.length > 0) {
        this.todoByUser.push({ user, userTodos });
      }
    });
    console.log(this.todoByUser)
  }
 
  getUserById(userId: number): Users | undefined {
    return this.users.find((user) => user.id == userId);
  }
 
  updateTodo(updatedTodo: Todos) {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

}
