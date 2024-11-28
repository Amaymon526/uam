import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import {RegisterComponent} from './pages/public/register/register.component';
import {LoginComponent} from './pages/public/login/login.component';
import {UserListComponent} from './pages/user-management/user-list/user-list.component';
import {UserCreateEditComponent} from './pages/user-management/user-create-edit/user-create-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserListComponent},
  { path: 'user/create', component: UserCreateEditComponent}
];

