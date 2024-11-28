import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SpinnerComponent} from '../../../components/spinner/spinner.component';
import {AuthControllerService, AuthResponse, LoginRequest, RegisterRequest} from '../../../generated/rest/project';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {response} from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  errorMessage: string = '';
  isLoading = true;

  constructor(
    private authService: AuthControllerService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 250); }

  onRegister() {
    this.isLoading = true;

    const registerRequest: RegisterRequest = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(registerRequest).subscribe({
      next: (response: AuthResponse) => {
        this.isLoading = false;
        console.log('Register-Response:', response);

        if (response.success) {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 10);

          this.cookieService.set('auth_token', response.token || '', expirationDate, '/');
          console.log('Token gespeichert:', response.token);

          if (response.userId) {
            this.cookieService.set('user_id', response.token || '', expirationDate, '/');
            console.log('UserId gespeichert:', response.userId);
            this.router.navigate(['']);
          } else {
            console.error("UserId nicht gefunden")
          }
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Register fehlgeschlagen. Bitte überprüfe deine Eingaben.';
        console.error(err);
      }
    })

  }

  onLogin(): void {
    this.isLoading = true;

    const loginRequest: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (response: AuthResponse) => {
        this.isLoading = false;
        console.log('Login-Response:', response);

        if (response.success) {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 10);


          this.cookieService.set('auth_token', response.token || '', expirationDate, '/');
          console.log('Token gespeichert:', response.token);


          if (response.userId) {
            this.cookieService.set('user_id', response.userId, expirationDate, '/');
            console.log('Benutzer-ID gespeichert:', response.userId);


            this.router.navigate(['']);
          } else {
            console.error('Benutzer-ID fehlt im Login-Response.');
            this.errorMessage = 'Login erfolgreich, aber Benutzer-ID fehlt.';
          }
        } else {
          this.errorMessage = response.message || 'Login fehlgeschlagen. Bitte überprüfe deine Eingaben.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Login fehlgeschlagen. Bitte überprüfe deine Eingaben.';
        console.error(err);
      }
    });
  }
}
