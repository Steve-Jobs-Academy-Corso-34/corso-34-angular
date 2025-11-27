/**
 * ANGULAR: Lista utenti con *ngFor
 * REACT: {users.map((user, index) => <div key={user.id}>...</div>)}
 */

import { CommonModule } from '@angular/common';
import { Component, inject, signal, effect } from '@angular/core';
import { User } from '../../types/users';
import { UserCard } from './user-card/user-card';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, UserCard, FormsModule], // CommonModule Serve per *ngFor
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  usersService = inject<UsersService>(UsersService);

  search = signal<string>('');
  ageFilter = signal<number | undefined>(undefined);

  constructor() {
    // Effetto per aggiornare la lista utenti quando search o ageFilter cambiano
    effect(() => {
      // Filtra gli utenti in base a search e ageFilter tramite usersService
      this.usersService.filterUsers(this.search(), this.ageFilter());
    });
  }

  get users(): User[] {
    return this.usersService.users;
  }

  deleteUser(userId: number) {
    this.usersService.users = this.usersService.users.filter((user) => user.id !== userId);
  }
}
