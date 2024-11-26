import {Component, Inject, OnInit} from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}


  ngOnInit() {}

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
