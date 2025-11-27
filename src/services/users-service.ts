import { Injectable } from '@angular/core';
import { User } from '../types/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // Array di utenti accessibile nel template
  baseUsers: User[] = [
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

  users: User[] = [...this.baseUsers];

  filterUsers(search?: string, ageFilter?: number) {
    // se search e ageFilter sono undefined ritorna users
    if (!search && ageFilter == undefined) {
      this.users = this.baseUsers;
    }

    const searchLower = (search || '').toLowerCase().trim();

    this.users = this.baseUsers.filter(
      (user) =>
        (user.name.toLowerCase().includes(searchLower) ||
          user.surname.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)) &&
        // se ageFilter è undefined (non ha valore) è true,
        // se è definito la condizione (this.ageFilter == undefined) è false
        // se è false filtra l'utente per età
        (ageFilter == undefined || user.age === ageFilter)

      // ALTERNATIVA PIÙ LUNGA:
      /* if(this.ageFilter == undefined){
          return true
        } else{
          return user.age === this.ageFilter
        } */
    );
  }
}
