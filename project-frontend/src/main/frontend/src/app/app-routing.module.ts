import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UserEditComponent} from "./private/admin/user-edit/user-edit.component";
import {UserListComponent} from "./private/admin/user-list/user-list.component";
import {UserEditIdComponent} from "./private/admin/user-edit-id/user-edit-id.component";
import {MainShopComponent} from "./public/main/main-shop/main-shop.component";
import {MainShopProductComponent} from "./public/main/main-shop-product/main-shop-product.component";

import {UserLoginRegisterComponent} from "./public/user/user-login/user-login-register.component";
import {UserRegisterComponent} from "./public/user/user-register/user-register.component";

import {AuthButtonComponent} from "./auth-button/auth-button.component";
import {RolesComponent} from "./private/roles/roles.component";

const APP_ROUTES: Routes = [{
  // component: AppComponent,
  path: 'project',
  children:[

    {
      component: UserEditComponent,
      path: 'admin/user/:id/edit'
    },
    {
      component: UserEditComponent,
      path: 'admin/user/new'
    },
    {
      component: UserListComponent,
      path: 'admin/user/list'
    },
    {
      component: RolesComponent,
      path: 'admin/role/list'
    },
    {
      component: MainShopComponent,
      path: 'main/shop'
    },
    {
      component: MainShopProductComponent,
      path: 'main/shop/:id/shop'
    },
    {
      component: UserLoginRegisterComponent,
      path: 'user/login'
    },
    {
      component: UserRegisterComponent,
      path: 'user/register'
    },
    {
      component: AuthButtonComponent,
      path: 'auth/login'
    }
  ]


}];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
