// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) {}

    getUser(): Observable<{ roles: string[] } | null> {
        const userId = this.getUserIdFromCookie();
        if (!userId) return of(null);
        return this.http.get<{ roles: string[] }>(`/api/user/${userId}`).pipe(
            catchError(() => of(null))
        );
    }

    private getUserIdFromCookie(): string | null {
        const match = document.cookie.match('(^|;)\s*userId\s*=\s*([^;]+)');
        return match ? match[2] : null;
    }
}
