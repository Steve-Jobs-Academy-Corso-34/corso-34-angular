import { Component, signal } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';
import { UserList } from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [DataBinding, UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('corso-34-angular');
}
