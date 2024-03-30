import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todos } from 'src/app/models/todos.interface';
import { Users } from 'src/app/models/users.interface';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
  todos: Todos[] = [];
  users: Users[] = [];
  filteredTodos: Todos[] = [];
  searchText: string = '';

  constructor(private fbSrv: FirebaseService) {}

  ngOnInit() {
    combineLatest([this.fbSrv.todos$, this.fbSrv.users$])
      .pipe(
        map(([todos, users]) => {
          this.todos = todos;
          this.users = users;
          this.applyFilter();
        })
      )
      .subscribe();
  }

  getUserById(userId: number): Users | undefined {
    return this.users.find((user) => user.id == userId);
  }

  updateTodo(updatedTodo: Todos) {
    const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.applyFilter();
    }
  }

  applyFilter() {
    if (!this.searchText) {
      this.filteredTodos = this.todos;
    } else {
      this.filteredTodos = this.todos.filter((todo) =>
        todo.todo.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  clearSearch() {
    this.searchText = '';
    this.applyFilter();
 }
}
