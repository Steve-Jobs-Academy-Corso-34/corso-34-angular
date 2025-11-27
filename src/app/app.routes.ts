import { Routes } from '@angular/router';
import { UserList } from './user-list/user-list';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Home } from './home/home';
import { Forms } from './forms/forms';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    component: UserList,
  },
  {
    path: 'forms',
    component: Forms,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'directives',
    component: Directives,
  },
];
