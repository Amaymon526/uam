import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import {AuthControllerService, CurrentUserResponse, User, UserControllerService} from '../generated/rest/project';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private currentUserSubject = new BehaviorSubject<CurrentUserResponse | null>(null);

  public currentUser$: Observable<CurrentUserResponse | null> = this.currentUserSubject.asObservable();

  constructor(
    private cookieService: CookieService,
    private userService: UserControllerService
  ) {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    const userId = this.cookieService.get('user_id');
    if (userId) {
      this.userService.currentUser(userId).subscribe({
        next: (user) => {
          this.currentUserSubject.next(user);
          console.log('Aktueller Benutzer erfolgreich geladen:', user);
        },
        error: (err) => {
          console.error('Fehler beim Laden des aktuellen Benutzers:', err);
          this.currentUserSubject.next(null);
        }
      });
    } else {
      console.warn('Benutzer-ID im Cookie nicht gefunden.');
      this.currentUserSubject.next(null);
    }
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
