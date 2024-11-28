import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthControllerService, AuthResponse, LoginRequest, CurrentUserResponse } from '../../../generated/rest/project';
import {SpinnerComponent} from '../../../components/spinner/spinner.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    SpinnerComponent,
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthControllerService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 250); }


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
