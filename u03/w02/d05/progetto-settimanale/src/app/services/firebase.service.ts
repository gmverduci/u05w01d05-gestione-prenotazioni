import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todos } from '../models/todos.interface';
import { Users } from '../models/users.interface';
import { getDatabase, ref, onValue } from "firebase/database";

@Injectable({
 providedIn: 'root',
})
export class FirebaseService {
 private db = getDatabase();
 private todosRef = ref(this.db, 'todos');
 private usersRef = ref(this.db, 'users');

 todosSub = new Subject<Todos[]>();
 usersSub = new Subject<Users[]>();

 getTodos(): Observable<Todos[]> {
 return new Observable<Todos[]>(observer => {
    onValue(this.todosRef, (snapshot) => {
      const data = snapshot.val();
      const todos = Object.keys(data || {}).map(key => ({ ...data[key], id: key }));
      observer.next(todos);
    }, error => {
      console.error('Error fetching todos:', error);
      observer.error(error);
    });
 });
}

getUsers(): Observable<Users[]> {
 return new Observable<Users[]>(observer => {
    onValue(this.usersRef, (snapshot) => {
      const data = snapshot.val();
      const users = Object.keys(data || {}).map(key => ({ ...data[key], id: key }));
      observer.next(users);
    }, error => {
      console.error('Error fetching users:', error);
      observer.error(error);
    });
 });
}

updateTodosSubject(todos: Todos[]): void {
 this.todosSub.next(todos);
}

updateUsersSubject(users: Users[]): void {
 this.usersSub.next(users);
}

getUserById(userId: string): Observable<any> {
  const userRef = ref(this.db, `users/${userId}`);
  return new Observable<any>(observer => {
     onValue(userRef, (snapshot) => {
       const user = snapshot.val();
       observer.next(user);
     }, error => {
       console.error('Error fetching user:', error);
       observer.error(error);
     });
  });
 }
}
