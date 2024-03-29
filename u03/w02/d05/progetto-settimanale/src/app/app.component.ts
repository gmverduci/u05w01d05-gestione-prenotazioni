import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do List';

  constructor (private router: Router) {}

  whichUrl(): string {
    return this.router.url;
  }
}
