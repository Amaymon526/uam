import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UserEditComponent} from "./private/admin/user-edit/user-edit.component";
import {UserListComponent} from "./private/admin/user-list/user-list.component";
import {UserEditIdComponent} from "./private/admin/user-edit-id/user-edit-id.component";
import {MainShopComponent} from "./public/main/main-shop/main-shop.component";
import {MainShopProductComponent} from "./public/main/main-shop-product/main-shop-product.component";
import {MainShopProductAddComponent} from "./public/main/main-shop-product-add/main-shop-product-add.component";
import {UserLoginRegisterComponent} from "./public/user/user-login/user-login-register.component";
import {UserRegisterComponent} from "./public/user/user-register/user-register.component";
import {ProductAddComponent} from "./private/seller/product-add/product-add.component";
import {AuthButtonComponent} from "./auth-button/auth-button.component";

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
      component: MainShopComponent,
      path: 'main/shop'
    },
    {
      component: MainShopProductComponent,
      path: 'main/shop/:id/shop'
    },
    {
      component: MainShopProductAddComponent,
      path: 'main/shop/new'
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
      component: ProductAddComponent,
      path: 'product/new'
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
