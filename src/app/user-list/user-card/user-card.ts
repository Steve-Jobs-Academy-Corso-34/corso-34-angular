import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../../types/users';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard implements OnInit, OnDestroy {
  @Input() user: User = {
    id: 1,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    email: 'example@example.com',
  };

  @Output() delete = new EventEmitter<number>();

  // Log di creazione del componente
  ngOnInit() {
    console.log(`UserCard di ${this.user.name} ${this.user.surname} creato`);
  }

  // Log di distruzione del componente
  ngOnDestroy() {
    console.log(`UserCard di ${this.user.name} ${this.user.surname} distrutto`);
  }

  handleDelete() {
    this.delete.emit(this.user.id);
  }
}
