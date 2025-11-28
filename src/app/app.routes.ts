import { Routes } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Home } from './home/home';
import { Forms } from './forms/forms';
import { UserPage } from './user-page/user-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'users',
    component: UserPage,
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
