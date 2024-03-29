import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "todo-list-103b3.firebaseapp.com",
  databaseURL: "https://todo-list-103b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-103b3",
  storageBucket: "todo-list-103b3.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

initializeApp(firebaseConfig);

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';
import { PendingComponent } from './components/pending/pending.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Route[] = [
 {
    path: '',
    component: HomeComponent
 },
 {
    path: 'completed',
    component: CompletedComponent
 },
 {
    path: 'pending',
    component: PendingComponent
 },
 {
    path: 'users',
    component: UsersComponent
 }
];

@NgModule({
 declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    CompletedComponent,
    PendingComponent,
    AllTodosComponent,
    UsersComponent,
    NavbarComponent,
    Error404Component,
 ],
 imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
