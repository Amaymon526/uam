import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import {AuthControllerService, AuthResponse, CurrentUserResponse, LoginRequest} from "../../gen";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RippleModule, AppFloatingConfigurator],
    template: `
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Willkommen zum UAM!</div>
                            <span class="text-muted-color font-medium">Log dich ein, um fortzufahren</span>
                        </div>

                        <div>
                            <label class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email/Username</label>
                            <input pInputText type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />

                            <label class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Passwort</label>
                            <p-password [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Eingeloggt bleiben</label>
                                </div>
                            </div>
                            <p-button label="Anmelden" styleClass="w-full" (click)="login()"></p-button>
                        </div>
                        <div class="text-center mb-8">
                            <a>Noch kein Konto?</a>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" routerLink="/auth/register">Registrieren</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    email: string = '';
    password: string = '';
    checked: boolean = false;

    constructor(private authService: AuthControllerService, private router: Router) {}

    ngOnInit(): void {
        const userId = this.getCookie('userId');
        if (userId) {
            this.authService.getCurrentUser(userId).subscribe(
                (user: CurrentUserResponse) => {
                    console.log('Benutzer geladen:', user);
                    this.router.navigate(['/']);
                }
            );
        }
    }

    login(): void {
        const loginRequest: LoginRequest = {
            email: this.email,
            password: this.password
        };

        this.authService.login(loginRequest).subscribe(
            (response: AuthResponse) => {
                if (response && response.userId) {
                    console.log('Login erfolgreich:', response);
                    this.setUserIdCookie(response.userId);
                    this.router.navigate(['/dashboard']);
                } else {
                    console.error('Login fehlgeschlagen: Keine gültige User ID erhalten');
                }
            }
        );
    }

    private setUserIdCookie(userId: string | undefined): void {
        if (!userId) {
            console.error('Fehler: User ID ist undefined und kann nicht in Cookie gespeichert werden.');
            return;
        }
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `userId=${userId}; expires=${expiryDate.toUTCString()}; path=/;`;
    }

    private getCookie(name: string): string | null {
        const match = document.cookie.match('(^|;)\s*' + name + '\s*=\s*([^;]+)');
        return match ? decodeURIComponent(match[2]) : null;
    }
}
