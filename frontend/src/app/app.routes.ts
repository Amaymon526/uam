import { Routes } from '@angular/router';
import {UserListComponent} from './admin/user/user-list/user-list.component';
import {User} from '@auth0/auth0-angular';

export const routes: Routes = [
  {path: "u", component: UserListComponent}
];
