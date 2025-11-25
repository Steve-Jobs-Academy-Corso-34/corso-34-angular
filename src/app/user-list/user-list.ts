/**
 * ANGULAR: Lista utenti con *ngFor
 * REACT: {users.map((user, index) => <div key={user.id}>...</div>)}
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../types/users';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule], // Serve per *ngFor
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  // Array di utenti accessibile nel template
  users: User[] = [
    {
      id: 1,
      name: 'Michele',
      surname: 'Tornello',
      age: 24,
      email: 'michele@example.com',
    },
    {
      id: 2,
      name: 'Luca',
      surname: 'Rossi',
      age: 25,
      email: 'luca@example.com',
    },
    {
      id: 3,
      name: 'Anna',
      surname: 'Bianchi',
      age: 28,
      email: 'anna@example.com',
    },
    {
      id: 4,
      name: 'Giovanni',
      surname: 'Verdi',
      age: 29,
      email: 'giovanni@example.com',
    },
    {
      id: 5,
      name: 'Giulia',
      surname: 'Neri',
      age: 30,
      email: 'giulia@example.com',
    },
  ];

  // Ottimizza il rendering: identifica ogni elemento tramite id
  // In React: key={user.id} nell'elemento mappato
  trackById(index: number, user: User): number {
    return user.id;
  }
}
