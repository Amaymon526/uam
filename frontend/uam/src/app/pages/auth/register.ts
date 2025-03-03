import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import {FormsModule} from "@angular/forms";
import {AuthControllerService, AuthResponse, CurrentUserResponse, RegisterRequest} from "../../gen";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, RippleModule, AppFloatingConfigurator, FormsModule],
    template: `
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Willkommen zum UAM!</div>
                            <span class="text-muted-color font-medium">Registriere dich, um fortzufahren</span>
                        </div>
                        <div>
                            <label class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Username</label>
                            <input pInputText type="text" placeholder="Username" class="w-full md:w-[30rem] mb-8" [(ngModel)]="username" />
                            <label class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText type="text" placeholder="Email address" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />
                            <label class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Passwort</label>
                            <p-password [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>
                            <p-button label="Registrieren" styleClass="w-full" (click)="register()"></p-button>
                        </div>
                        <div class="text-center mb-8">
                            <a>Du hast bereits ein Konto?</a>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary" routerLink="/auth/login">Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Register implements OnInit {
    username: string = '';
    email: string = '';
    password: string = '';

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

    register(): void {
        const registerRequest: RegisterRequest = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        this.authService.register(registerRequest).subscribe(
            (response: AuthResponse) => {
                if (response && response.userId) {
                    console.log('Registrierung erfolgreich:', response);
                    this.setUserIdCookie(response.userId);
                    this.router.navigate(['/dashboard']);
                } else {
                    console.error('Registrierung fehlgeschlagen: Keine gültige User ID erhalten');
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
