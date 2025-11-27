/**
 * ANGULAR: Lista utenti con *ngFor
 * REACT: {users.map((user, index) => <div key={user.id}>...</div>)}
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../types/users';
import { UserCard } from './user-card/user-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, UserCard, FormsModule], // CommonModule Serve per *ngFor
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  search?: string;
  ageFilter?: number;

  get filteredUsers(): User[] {
    // se search e ageFilter sono undefined ritorna users
    if (!this.search && this.ageFilter == undefined) {
      return this.users;
    }

    const searchLower = (this.search || '').toLowerCase().trim();

    return this.users.filter(
      (user) =>
        (user.name.toLowerCase().includes(searchLower) ||
          user.surname.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)) &&
        // se ageFilter è undefined (non ha valore) è true,
        // se è definito la condizione (this.ageFilter == undefined) è false
        // se è false filtra l'utente per età
        (this.ageFilter == undefined || user.age === this.ageFilter)

      // ALTERNATIVA PIÙ LUNGA:
      /* if(this.ageFilter == undefined){
          return true
        } else{
          return user.age === this.ageFilter
        } */
    );
  }

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
      name: 'Michele',
      surname: 'Rossi',
      age: 24,
      email: 'luca@example.com',
    },
    {
      id: 3,
      name: 'Anna',
      surname: 'Bianchi',
      age: 24,
      email: 'anna@example.com',
    },
    {
      id: 4,
      name: 'Giovanni',
      surname: 'Verdi',
      age: 24,
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

  deleteUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
  }
}
