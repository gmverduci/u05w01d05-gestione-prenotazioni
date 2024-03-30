import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todos } from '../models/todos.interface';
import { Users } from '../models/users.interface';
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from '../../firebase.init';
@Injectable({
 providedIn: 'root',
})
export class FirebaseService {
 private db = getDatabase();
 private todosRef = ref(this.db, 'todos');
 private usersRef = ref(this.db, 'users');

 private todosSubject: BehaviorSubject<Todos[]> = new BehaviorSubject<Todos[]>([]);
 private usersSubject: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);

 todos$ = this.todosSubject.asObservable();
 users$ = this.usersSubject.asObservable();

 constructor() {
   this.getTodos();
   this.getUsers();
 }

 getTodos(): void {
   onValue(this.todosRef, (snapshot) => {
     const data = snapshot.val();
     const todos = Object.keys(data || {}).map(key => ({ ...data[key], id: key }));
     this.todosSubject.next(todos);
   }, error => {
     console.error('Error getting todos:', error);
   });
 }

 getUsers(): void {
   onValue(this.usersRef, (snapshot) => {
     const data = snapshot.val();
     const users = Object.keys(data || {}).map(key => ({ ...data[key], id: key }));
     this.usersSubject.next(users);
   }, error => {
     console.error('Error getthing users:', error);
   });
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

 updateTodos(todos: Todos[]): void {
   this.todosSubject.next(todos);
 }

 updateUsers(users: Users[]): void {
   this.usersSubject.next(users);
 }

 
}
