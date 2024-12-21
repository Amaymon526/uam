import { Routes } from '@angular/router';
import {UserListComponent} from './pages/user-list/user-list.component';
import {RoleListComponent} from './pages/role-list/role-list.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'roleList', component: RoleListComponent }
];
