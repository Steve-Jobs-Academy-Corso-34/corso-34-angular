import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../types/users';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user: User = {
    id: 1,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    email: 'example@example.com',
  };

  @Output() delete = new EventEmitter<number>();

  handleDelete() {
    this.delete.emit(this.user.id);
  }
}
