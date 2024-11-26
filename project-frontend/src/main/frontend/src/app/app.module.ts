import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditComponent} from './private/admin/user-edit/user-edit.component';
import {ButtonModule} from "primeng/button";
import {RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './private/admin/user-list/user-list.component';
import { UserEditIdComponent } from './private/admin/user-edit-id/user-edit-id.component';
import {TableModule} from "primeng/table";
import { HeaderComponent } from './private/admin/header/header.component';
import { MainShopComponent } from './public/main/main-shop/main-shop.component';
import { MainShopProductComponent } from './public/main/main-shop-product/main-shop-product.component';
import {InputTextarea, InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import { UserLoginRegisterComponent } from './public/user/user-login/user-login-register.component';
import { UserRegisterComponent } from './public/user/user-register/user-register.component';
import {ImageModule} from "primeng/image";
import {CardModule} from "primeng/card";
import { Component} from "@angular/core";
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { RolesComponent } from './private/roles/roles.component';
;


@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    UserListComponent,
    UserEditIdComponent,
    HeaderComponent,
    MainShopComponent,
    MainShopProductComponent,
    UserLoginRegisterComponent,
    UserRegisterComponent,
    AuthButtonComponent,
    RolesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        TableModule,
        InputTextareaModule,
        FileUploadModule,
        HttpClientModule,
        ImageModule,
        CardModule,
        FileUploadModule,
        BrowserModule,

        AuthModule.forRoot({
          domain: 'nonameyet.eu.auth0.com',
         clientId: 'ynijvjcZ2s9IRr2NDd4ejSOGhE18nZPq',
        })
    ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule {
}

