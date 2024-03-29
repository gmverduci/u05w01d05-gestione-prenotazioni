import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Todos } from 'src/app/models/todos.interface';
import { Users } from 'src/app/models/users.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
 selector: 'app-all-todos',
 templateUrl: './all-todos.component.html',
 styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
 todos: Todos[] = [];
 users: Users[] = [];
 todoByUser: { user: Users; userTodos: Todos[] }[] = [];

 constructor(private fbSrv: FirebaseService) {}

 ngOnInit() {
    combineLatest([
      this.fbSrv.getTodos(),
      this.fbSrv.getUsers()
    ]).subscribe(([todos, users]) => {
      this.todos = todos;
      this.users = users;
      this.createTodoByUserArray();
    });
 }

 createTodoByUserArray() {
    this.users.forEach((user) => {
      const userTodos = this.todos.filter((todo) => todo.userId == user.id);
      console.log(`User: ${user.id}, Todos:`, userTodos); 
      if (userTodos.length > 0) {
        this.todoByUser.push({ user, userTodos });
      }
    });
    console.log('Todos By User:', this.todoByUser);
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
